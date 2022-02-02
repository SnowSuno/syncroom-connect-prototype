import {ApiIconData} from "../api/syncroom";



export class Member {
    public readonly name: string;

    constructor(
        name: string,
    ) {
        this.name = name;
    }

    public get id(): string {
        return this.name;
    }
}

export class PublicMember extends Member {

}

export class PrivateMember extends Member {
    private readonly _count: number

    constructor(privateCount: number) {
        super("비공개 프로필");
        this._count = privateCount;
        privateCount++;
    }

    public get id() {
        return `private${this._count}`
    }
}

export class TempMember extends Member {
    constructor() {
        super("임시 참여 중");
    }
}

// export const PrivateMember = (privateCount: number) => {
//     privateCount++;
//     return new Member(
//         "비공개 프로필" + privateCount,
//         "비공개 프로필",
//         {
//             icon: "qwer",
//             iconurl: "qwer"
//         },
//         MemberType.PRIVATE,
//     )
// }
