import { useEffect, useState } from "react";
import style from "./Nav.module.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
    return (
        <div className={`${style.nav} ${show && style.nav__black} `}>
            <div className={style.nav__contents}>
                <img className={style.nav__logo} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img className={style.nav__avatar} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    );
}

export default Nav;
