import React, {useEffect, useState} from "react";
import styles from "./Home.module.scss";

import {Room} from "../common/classes/room";
import {Outlet, useLocation} from "react-router-dom";


import {Flipper, Flipped} from "react-flip-toolkit";
import Masonry from "react-masonry-css";

import {useRooms} from "../common/hooks/useRooms";

import RoomCard from "../components/RoomCard";
import {getSuggestedQuery} from "@testing-library/react";


const animationConfig = {
    spring: {
        stiffness: 500,
        damping: 40,
    },
    staggerConfig: {
        default: {
            reverse: false,
            speed: .1,
        }
    }
}

function Home() {
    const {data, loading, error} = useRooms();
    const location = useLocation()


    return <>

        <Flipper
            flipKey={data.map(room => (
                room.key
            )).join("") + location.pathname}
            {...animationConfig}
        >
            <Masonry
                breakpointCols={4}
                className={styles.grid}
                columnClassName={styles.column}
            >
                {/*{data.map(room => <Flipped*/}
                {/*    key={room.id}*/}
                {/*    flipId={room.id}*/}
                {/*>*/}
                {/*    <RoomCard*/}
                {/*        room={room}*/}
                {/*    />*/}
                {/*</Flipped>)}*/}

                {data.map(room => <RoomCard room={room}/>)}
            </Masonry>

            <Outlet/>
        </Flipper>
    </>;

}

interface FakeRoomCardProps {
    data: Room;
}

function FakeRoomCard({data: room}: FakeRoomCardProps) {

    return (
        <div>
            {room.name}
        </div>
    )
}

export default Home;
