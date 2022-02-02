import React, {useEffect, useState} from "react";
import styles from "./Home.module.scss";

import {Room} from "../common/classes/room";
import {Outlet, useLocation} from "react-router-dom";


import {Flipper, Flipped} from "react-flip-toolkit";
import Masonry from "react-masonry-css";

import {useRooms} from "../common/hooks/useRooms";

import RoomCard from "../components/RoomCard";
import {getSuggestedQuery} from "@testing-library/react";


function Home() {
    const {data, loading, error} = useRooms();
    const location = useLocation()


    return <>

        <Flipper flipKey={data.map(room => (
            room.key
        )).join("") + location.pathname}>
            <Masonry
                breakpointCols={4}
                className={styles.grid}
                columnClassName={styles.column}
            >
                {data.map(room => <Flipped
                    key={room.id}
                    flipId={room.id}
                >
                    <RoomCard
                        room={room}
                    />
                </Flipped>)}
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
