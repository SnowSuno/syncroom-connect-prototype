import React from "react";

import {Routes, Route, Outlet} from "react-router-dom";
import Modal from "../components/Modal";

function Home() {
    return <>
        Home

        {/*<Routes>*/}
        {/*    <Route path=":id" element={<Modal />}/>*/}
        {/*</Routes>*/}
        <Outlet />
    </>

}

export default Home;
