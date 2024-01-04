import { Link } from "react-router-dom";
import "./SignUpScreens.css";
import { registerUser } from "../Auth/RegisterUser";
import { loginUser } from "../Auth/LoginUser";
import { useState } from "react";

function SignUpScreens() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = async (e) => {
        e.preventDefault();
        try {
            const newUser = await registerUser({ password, email });
            console.log("New user registered:", newUser);
            // Thực hiện các bước sau khi đăng ký thành công.
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
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Account does not exist");
        }
    };
    return (
        <div className="signUpScreens">
            <form>
                <h1>Sign In</h1>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
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
