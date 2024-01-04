import { useEffect, useState } from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

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
                <Link to={"/Netflix-clone"}>
                    <img className={style.nav__logo} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                </Link>
                <Link to={"/Netflix-clone/profile"}>
                    <img className={style.nav__avatar} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
