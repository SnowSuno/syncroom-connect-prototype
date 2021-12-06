import {ApiIconData, ApiRoomData} from "../api/syncroom";
import {Country} from "../constants";

import {encode} from "base62";

const TAG_MAP = ["練習中", "おしゅべり", "初心者OK", "配信中", "録音中", "Classic", "Country/Folk", "Club Music/EDM", "Hip Hop/Rap", "R&B/Soul", "Jazz", "Fusion", "Rock", "HR/HM", "洋楽", "J-Pop", "アイドル", "アニメ・ゲーム・ボカロ", "World"];

const korean: RegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const japanese: RegExp = /[ぁ-んァ-ン一-龯]/;

const idHash = (timestamp: string, mid: string): string => {
    const [date, time] = timestamp.split(' ');
    return encode(new Date(`${date}T${time}-00:00`)
        .getTime() % 21600000 * 1000 + parseInt(mid));
};

const memberParser = (nickList: string[], iconList: ApiIconData[], num: number) => {
    return Array(num).map((_, i) => {

    });
}

export class Room {
    public readonly id: string
    public readonly name: string;
    public readonly desc: string;
    public readonly isPrivate: boolean;

    private readonly _creator: string;
    private readonly _tag_mask?: string;
    private readonly _tag_orig?: string;

    constructor(data: ApiRoomData) {
        this.id = idHash(data.create_time, data.creator_mid);
        this.name = data.room_name;
        this.desc = data.room_desc;
        this.isPrivate = data.need_passwd;

        this._creator = data.creator_nick;
        this._tag_mask = data.tag_mask;
        this._tag_orig = data.tag_orig;
    }

    public get country(): Country {
        let country: Country = Country.OTHER;
        [this._creator, this.desc, this.name].forEach(text => {
            if (korean.test(text)) {country = Country.KOREA;}
            else if (japanese.test(text)) {country = Country.JAPAN;}
        });
        return country;
    }

    public get tags(): string[] {
        if (!this._tag_mask) return [];
        const binaryMask = parseInt(this._tag_mask).toString(2).split("").reverse();
        const tags: string[] = TAG_MAP.filter((_, i) => binaryMask[i] === "1");
        if (binaryMask[31] === "1" && this._tag_orig) tags.push(this._tag_orig);
        return tags;
    }
}


