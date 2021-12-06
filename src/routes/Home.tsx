import React, {useEffect} from "react";

import {Outlet} from "react-router-dom";
import {useRooms} from "../common/hooks/useRooms";

function Home() {
    const {data, loading} = useRooms();

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        console.log(loading);
    }, [loading]);

    return <>
        Home


        <Outlet />
    </>

}

export default Home;
