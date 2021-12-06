import {ApiIconData} from "../api/syncroom";

enum MemberType {
    PUBLIC,
    PRIVATE,
    TEMP
}


export class Member {
    public readonly nickname: string;


    constructor(nickname?: string, icon?: ApiIconData) {
        this.nickname = nickname || '비공개 프로필';
    }
}
