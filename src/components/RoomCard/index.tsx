import React, {useEffect, useState} from "react";
import styles from "./style.module.scss";

import {Room} from "../../common/classes/room";
import MemberItem from "./MemberItem";
import {Card, CardActionArea} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {Flipped, spring} from "react-flip-toolkit";

interface RoomCardProps {
    room: Room;
}

function RoomCard ({room, ...flippedProps}: RoomCardProps) {
    const navagate = useNavigate();
    const {id} = useParams();

    const [z, setZ] = useState<number>(1);


    const onAppear = (el: HTMLElement, i: number) => {
        el.animate([
            {
                opacity: 0,
                transform: "scale(0.8)"
            },
            {
                opacity: 1,
                transform: "scale(1)"
            }
        ], {
            duration: 200,
            easing: "ease-out"
        })
        el.style.opacity = "1"
    }


    const onExit = (el: HTMLElement, _: number, onComplete: () => void) => {
        el.animate([
            {
                opacity: 1,
                transform: "scale(1)"
            },
            {
                opacity: 0,
                transform: "scale(0.8)"
            }
        ], {
            duration: 2000,
            easing: "ease-out"
        })
        // el.onanimationend = onComplete;
        onComplete();
    }



    return (
        <Flipped
            key={room.id}
            flipId={room.id}
            onAppear={onAppear}
            onExit={onExit}
            onStart={() => setZ(2)}
            onComplete={() => setZ(1)}
        >
            <Card
                className={styles.RoomCard}
                variant="outlined"
                style={{zIndex: z}}
                // onAnimationEnd={() => setZHook(1)}
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
