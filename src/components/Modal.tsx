import React from "react";
import styles from "./Modal.module.scss";

import {useNavigate, useParams} from "react-router-dom";

import {Flipped} from "react-flip-toolkit";
import {Card} from "@mui/material";


function Modal() {
    const {id} = useParams();
    const navigate = useNavigate();

    const onAppear = (el: HTMLElement, i: number) => {
        el.animate([
            {
                opacity: 0,
            },
            {
                opacity: 1,
            }
        ], {
            duration: 2000,
            easing: "ease-out"
        })
        el.style.opacity = "1"
    }

    return (<>
        <Flipped
            onAppear={onAppear}
        >
            <div
                className={styles.background}
                onClick={() => navigate("/")}
            />
        </Flipped>
        <Flipped
            flipId={id}
        >
            {/*<Dialog*/}
            {/*    onClose={() => navigate("/")}*/}
            {/*    open={true}*/}
            {/*>*/}
            {/*    qweqwe*/}
            {/*</Dialog>*/}
            <Card
                className={styles.Modal}
                variant="outlined"
            >
                id is {id}
            </Card>
        </Flipped>
    </>)
}

export default Modal;

