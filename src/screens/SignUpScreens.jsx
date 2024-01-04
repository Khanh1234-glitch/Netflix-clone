import { Link } from "react-router-dom";
import "./SignUpScreens.css";
import { registerUser } from "../Auth/RegisterUser";
import { loginUser } from "../Auth/LoginUser";
import { useState } from "react";

function SignUpScreens({ signUp = false, setSignUp }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        try {
            const newUser = await registerUser({ password, email });
            alert("New user registered:", newUser);
            // Thực hiện các bước sau khi đăng ký thành công.
            setSignUp(false);
        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    };
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser({ email, password });
            console.log("User logged in:", user);
            // Thực hiện các bước sau khi đăng nhập thành công.
            alert("Logged in successfully");
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.reload();
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Account does not exist");
        }
    };
    return (
        <div className="signUpScreens">
            <form>
                {!signUp ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                {!signUp ? <button onClick={signIn}>Sign In</button> : <button onClick={register}>Sign Up</button>}
                {!signUp ? (
                    <h4>
                        New to Netflix?{" "}
                        <span>
                            <Link
                                className="signUpScreens__link"
                                onClick={() => {
                                    setSignUp(true);
                                }}
                            >
                                Sign up now.
                            </Link>
                        </span>
                    </h4>
                ) : (
                    ""
                )}
            </form>
        </div>
    );
}

export default SignUpScreens;
