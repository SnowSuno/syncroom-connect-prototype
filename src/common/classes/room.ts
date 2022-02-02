import {ApiIconData, ApiRoomData} from "../api/syncroom";
import {Country} from "../constants";
import {Member, PrivateMember, PublicMember, TempMember} from "./member";

import {encode} from "base62";

const TAG_MAP = ["練習中", "おしゅべり", "初心者OK", "配信中", "録音中", "Classic", "Country/Folk", "Club Music/EDM", "Hip Hop/Rap", "R&B/Soul", "Jazz", "Fusion", "Rock", "HR/HM", "洋楽", "J-Pop", "アイドル", "アニメ・ゲーム・ボカロ", "World"];

const korean: RegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const japanese: RegExp = /[ぁ-んァ-ン一-龯]/;

const idHash = (timestamp: string, mid: string): string => {
    const [date, time] = timestamp.split(' ');
    return encode(new Date(`${date}T${time}-00:00`)
        .getTime() % 21600000 * 1000 + parseInt(mid));
};


export class Room {
    public readonly id: string
    public readonly name: string;
    public readonly desc: string;
    public readonly isPrivate: boolean;

    private readonly _creator: string;
    private readonly _tagMask?: string;
    private readonly _tagOrig?: string;

    private readonly _numMembers: number;
    private readonly _memberNames: string[];
    private readonly _memberIcons: ApiIconData[];

    constructor(data: ApiRoomData) {
        this.id = idHash(data.create_time, data.creator_mid);
        this.name = data.room_name;
        this.desc = data.room_desc;
        this.isPrivate = data.need_passwd;

        this._creator = data.creator_nick;
        this._tagMask = data.tag_mask;
        this._tagOrig = data.tag_orig;

        this._numMembers = data.num_members;
        this._memberNames = data.members;
        this._memberIcons = data.iconlist || [];
    }

    public get country(): Country {
        let country: Country = Country.OTHER;
        [this._creator, this.desc, this.name].forEach(text => {
            if (korean.test(text)) {
                country = Country.KOREA;
            } else if (japanese.test(text)) {
                country = Country.JAPAN;
            }
        });
        return country;
    }

    public get tags(): string[] {
        if (!this._tagMask) return [];
        const binaryMask = parseInt(this._tagMask).toString(2).split("").reverse();
        const tags: string[] = TAG_MAP.filter((_, i) => binaryMask[i] === "1");
        if (binaryMask[31] === "1" && this._tagOrig) tags.push(this._tagOrig);
        return tags;
    }

    public get members(): Member[] {
        let privateCount = 0;
        const members = Array.from(
            {length: this._numMembers},
            (_, i) => this._parseMember(i, privateCount)
        );

        members.sort((a, b) => {
            if (a instanceof TempMember) {
                return 1;
            }
            if (b instanceof TempMember) {
                return -1;
            }
            return 0;
        })

        return members;
    }

    private _parseMember(index: number, privateCount: number): Member {
        const name = this._memberNames[index];
        const icon = this._memberIcons[index];

        if (name === undefined || icon === undefined) {
            return new PrivateMember(privateCount);
        }

        if (name === "") {
            return new TempMember();
        }

        return new PublicMember(
            name,
        )
    }

    public get key() {
        return this.id + this._numMembers;
    }
}


