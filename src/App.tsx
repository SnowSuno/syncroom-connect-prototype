import React, {MouseEvent} from "react";
import "./App.scss";

import {matchRoutes, Route, Routes, useLocation, useNavigate} from "react-router-dom";

import Home from "./routes/Home";
import Settings from "./routes/Settings";
import Community from "./routes/Community";

import {AppBar, Toolbar, Tabs, Tab} from "@mui/material";

import {ReactComponent as Logo} from "./assets/title.svg";
import Modal from "./components/Modal";
import NotFound from "./routes/NotFound";

interface LinkTabProps {
    label?: string;
    href: string;
}

function LinkTab(props: LinkTabProps) {
    const navigate = useNavigate();
    return (
        <Tab
            component="a"
            onClick={(event: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLDivElement>) => {
                event.preventDefault();
                navigate(props.href);
            }}
            {...props}
        />
    );
}


function App() {
    const routeIndex = useRouteIndex([
        "/*",
        "/community/*",
        "/settings"
    ]);

    return (
        <>
            <AppBar
                color="secondary"
                position="static"
                elevation={0}
                className="AppBar"
            >
                <Toolbar disableGutters={true} >
                    <Logo height={55} width={200}/>
                    <Tabs value={routeIndex}
                    >
                        <LinkTab label="홈" href="/"/>
                        <LinkTab label="커뮤니티" href="/community"/>
                        <LinkTab label="설정" href="/settings"/>
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path=":id" element={<Modal />}/>
                </Route>
                <Route path="community/*" element={<Community/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );
}

const useRouteIndex = (paths: string[]) => {
    const location = useLocation()

    const match = matchRoutes(
        paths.map(route => ({path: route})),
        location
    );

    return (match && match[0] && match[0].route.path)
        ? paths.indexOf(match[0].route.path) : 0;
}


export default App;
