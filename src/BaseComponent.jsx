import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function BaseComponent() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default BaseComponent;
