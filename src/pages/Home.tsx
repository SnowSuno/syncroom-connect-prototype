import React from "react";
import styles from "./Home.module.scss";

import {Outlet, useLocation} from "react-router-dom";


import {Flipper} from "react-flip-toolkit";
import Masonry from "react-masonry-css";

import {useRooms} from "../common/hooks/useRooms";

import RoomCard from "../components/RoomCard";

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
                {data.map(room => <RoomCard room={room}/>)}
            </Masonry>

            <Outlet/>
        </Flipper>
    </>;

}


export default Home;
