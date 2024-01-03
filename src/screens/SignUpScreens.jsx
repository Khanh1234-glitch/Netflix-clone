import { Link } from "react-router-dom";
import "./SignUpScreens.css";

function SignUpScreens() {
    const register = (e) => {
        e.preventDefault();
    };
    const signIn = (e) => {
        e.preventDefault();
    };
    return (
        <div className="signUpScreens">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={signIn} type="submit">
                    Sign In
                </button>
                <h4>
                    New to Netflix?{" "}
                    <span>
                        <Link className="signUpScreens__link" onClick={register}>
                            Sign up now.
                        </Link>
                    </span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreens;
