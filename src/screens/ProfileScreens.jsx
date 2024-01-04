import { useNavigate } from "react-router-dom";
import "./ProfileScreens.css";
import { useEffect } from "react";

function ProfileScreens() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!user) {
            // Nếu không có người dùng đăng nhập, chuyển hướng đến trang Netflix-clone
            navigate("/Netflix-clone");
        }
    }, [navigate]);

    const handleSignOut = () => {
        // Xóa thông tin đăng nhập từ localStorage
        localStorage.removeItem("loggedInUser");
        console.log("User logged out successfully");
        navigate("/Netflix-clone");
        window.location.reload();
    };
    return (
        <div className="profileScreens">
            <div className="profileScreens__body">
                <h1>Edit Profile</h1>
                <div className="profileScreens__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <div className="profileScreens__Details">
                        <h2>{user.email}</h2>
                        <div className="profileScreens__plans">
                            <h3>Plans</h3>
                            <button onClick={handleSignOut}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreens;
