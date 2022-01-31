import React, {forwardRef} from "react";

import {Room} from "../common/classes/room";

import {Card} from "@mui/material";

interface RoomCardProps {
    room: Room;
}

const RoomCard = forwardRef<HTMLDivElement, RoomCardProps>((
    {room, ...flippedProps}, ref
) => {
    const size = 1;

    return (
        <Card
            ref={ref}
            elevation={0}
            sx={{width: 200, height: 100}}
            {...flippedProps}
        >
            {room.name}
        </Card>
    );
})

export default RoomCard;
