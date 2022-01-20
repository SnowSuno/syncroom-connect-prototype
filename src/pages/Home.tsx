import React, {useEffect} from "react";
import "./Home.scss";
import {Outlet} from "react-router-dom";

import {useRooms} from "../common/hooks/useRooms";

import {CSSGrid, measureItems, makeResponsive} from "react-stonecutter";
import RoomCard from "../components/RoomCard";


function Home() {
    const {data, loading} = useRooms();
    //
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);
    //
    // useEffect(() => {
    //     console.log(loading);
    // }, [loading]);
    //
    const Grid = makeResponsive(measureItems(CSSGrid), {
        maxWidth: 1920,
        minPadding: 100,
    });

    return <>
        {/*<CSSGrid*/}
        {/*    duration={200}*/}
        {/*    columns={4}*/}
        {/*    columnWidth={100}*/}
        {/*    gutterWidth={5}*/}
        {/*    gutterHeight={5}*/}
        {/*>*/}
        {/*    {data.map(room => <div id={room.id}>*/}
        {/*        <RoomCard room={room} />*/}
        {/*    </div>)}*/}



        {/*</CSSGrid>*/}

        <div className="grid">
            {data.map(room => <div id={room.id}>
                <RoomCard room={room} />
            </div>)}
        </div>
        <Outlet/>
    </>;

}

export default Home;
