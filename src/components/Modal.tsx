import React from "react";
import styles from "./Modal.module.scss";

import {useNavigate, useParams} from "react-router-dom";

import {Flipped} from "react-flip-toolkit";
import {Card, Dialog} from "@mui/material";


function Modal() {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <Flipped
            flipId={id}
            portalKey={id}
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
    )
}

export default Modal;

