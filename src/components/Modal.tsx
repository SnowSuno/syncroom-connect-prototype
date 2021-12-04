import React from "react";

import {useParams} from "react-router-dom";


function Modal() {
    const {id} = useParams();

    return (
        <div>
            id is {id}
        </div>
    )
}

export default Modal;

