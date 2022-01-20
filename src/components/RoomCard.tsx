import React from "react";

import {Room} from "../common/classes/room";

import {Card} from "@mui/material";

interface RoomCardProps {
    room: Room;
}

function RoomCard({room}: RoomCardProps) {
    const size = 1;

    return (
        <Card
            elevation={0}
            sx={{width: 100}}
        >
            {room.name}
        </Card>
    );
}

export default RoomCard;
