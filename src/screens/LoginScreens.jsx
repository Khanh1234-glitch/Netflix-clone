import { useState } from "react";
import "./LoginScreens.css";
import SignUpScreens from "./SignUpScreens";

function LoginScreen() {
    const [singIn, setSignIn] = useState(false);
    return (
        <div className="loginScreens">
            <div className="loginScreens__Background">
                <img className="loginScreens__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button
                    onClick={() => {
                        setSignIn(true);
                    }}
                    className="loginScreens__button"
                >
                    Sign In
                </button>
            </div>
            <div className="loginScreen__gradient"></div>

            <div className="loginScreen__Body">
                {singIn ? (
                    <SignUpScreens />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more</h1>
                        <h2>Watch anywhere. Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="loginScreen_Input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button
                                    onClick={() => {
                                        setSignIn(true);
                                    }}
                                    className="loginScreen__GetStarted "
                                >
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;
