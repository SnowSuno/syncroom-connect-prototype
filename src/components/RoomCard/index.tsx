import React, {forwardRef, useEffect, useState} from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

import {Room} from "../../common/classes/room";
import MemberItem from "./MemberItem";
import {Card, CardActionArea} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {getApiData} from "../../common/api/syncroom";
import {Flipped} from "react-flip-toolkit";

import anime from "animejs";

interface RoomCardProps {
    room: Room;
}

function RoomCard ({room, ...flippedProps}: RoomCardProps) {
    const navagate = useNavigate();
    const {id} = useParams();

    const [z, setZ] = useState<number>(1);

    useEffect(() => {
        if (id === room.id) {
            setZ(2);
        }
    }, [id, room.id])

    // const [active, setActive] = useState<boolean>(false);
    const onAppear = (el: HTMLElement, i: number) =>
        anime({
            targets: el,
            opacity: 1,
            easing: "easeInCubic",
            duration: 0.5,
        })


    return (
        <Flipped
            key={room.id}
            flipId={room.id}
            stagger
            onAppear={onAppear}
        >
            <Card
                className={styles.RoomCard}
                variant="outlined"
                // sx={{width: 200, height: 100}}
                z-index={z}
                onAnimationEnd={() => setZ(1)}
                {...flippedProps}
            >
                <CardActionArea
                    onClick={() => {
                        navagate(`/${room.id}`)
                    }}
                >
                    <div className={styles.tags}>
                        {room.tags.map(tag => <p>{`#${tag}`}</p>)}
                    </div>

                    <div className={styles.head}>
                        {room.name}
                    </div>

                    <div className={styles.members}>
                        {room.members.map(member => (
                            <MemberItem member={member}/>
                        ))}
                    </div>
                </CardActionArea>
            </Card>
        </Flipped>
    );
}

export default RoomCard;
