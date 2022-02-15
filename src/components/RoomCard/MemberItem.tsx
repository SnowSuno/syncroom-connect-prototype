import React from "react";
import styles from "./style.module.scss";

import {Member} from "../../common/classes/member";

interface MemberItemProps {
    member: Member;
}

function MemberItem({member}: MemberItemProps) {


    return (
        <div className={styles.member}>
            <div>{member.icon.render()}</div>
            <p>{member.name}</p>
        </div>
    )
}

export default React.memo(MemberItem);
