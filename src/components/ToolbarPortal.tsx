import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface ToolbarPortalProps {
    children: ReactNode;
}

function ToolbarPortal({children}: ToolbarPortalProps) {
    const el = document.getElementById("toolbar")!;
    console.log(el);
    return createPortal(children, el);
}

export default ToolbarPortal;
