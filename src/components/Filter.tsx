import React from "react";
import {Toolbar, FormControl, Select} from "@mui/material";

interface ToolbarProps {
    routeIndex: number;
}

function Filter({routeIndex}: ToolbarProps) {


    return (
        <Toolbar>
            <FormControl>
                <Select>

                </Select>
            </FormControl>
        </Toolbar>
    );
}

export default Filter
