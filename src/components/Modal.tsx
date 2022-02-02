import React from "react";
import styles from "./Modal.module.scss";

import {useParams} from "react-router-dom";

import {Flipped} from "react-flip-toolkit";
import {Card} from "@mui/material";


function Modal() {
    const {id} = useParams();

    return (
        <Flipped
            flipId={id}
        >
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

