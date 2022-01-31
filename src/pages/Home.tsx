import React, {useEffect, useState} from "react";
import "./Home.scss";

import {Room} from "../common/classes/room";
import {Outlet} from "react-router-dom";

// import FlipMove from "react-flip-move";


import {Flipper, Flipped} from "react-flip-toolkit";
import Masonry from "react-masonry-css";
// import {Masonry} from "masonic";

import {useRooms} from "../common/hooks/useRooms";

import RoomCard from "../components/RoomCard";


function Home() {
    const {data, loading, error} = useRooms();


    return <>
        {/*<FlipMove className="grid">*/}
        {/*    {data.map(room => <RoomCard*/}
        {/*        key={room.id}*/}
        {/*        room={room}*/}
        {/*    />)}*/}
        {/*</FlipMove>*/}

        <Flipper flipKey={data.map(room => room.id).join("")}>
            <Masonry
                breakpointCols={4}
                className="grid"
                columnClassName="column"
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
            {/*{data.map(room => <Flipped*/}
            {/*    key={room.id}*/}
            {/*    flipId={room.id}*/}
            {/*>*/}
            {/*    <RoomCard*/}
            {/*        room={room}*/}
            {/*    />*/}
            {/*</Flipped>)}*/}

            {/*<Masonry*/}
            {/*    items={data}*/}
            {/*    columnGutter={3}*/}
            {/*    render={FakeRoomCard}*/}
            {/*/>*/}


            {/*{fakeData.map(room => <Flipped*/}
            {/*    key={room}*/}
            {/*    flipId={room}*/}
            {/*>*/}
            {/*    <div>{room}</div>*/}
            {/*</Flipped>)}*/}
        </Flipper>


        <Outlet/>
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
