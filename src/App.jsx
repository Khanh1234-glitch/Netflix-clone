import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreens";
import LoginScreen from "./screens/LoginScreens";
import { useEffect, useState } from "react";
import ProfileScreens from "./screens/ProfileScreens";
import BaseComponent from "./BaseComponent";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Kiểm tra xem có người dùng đã đăng nhập không
        const userFromLocalStorage = localStorage.getItem("loggedInUser");
        if (userFromLocalStorage) {
            setUser(JSON.parse(userFromLocalStorage));
        }
    }, []);
    return (
        <div className="app">
            <Routes>
                {!user ? (
                    <Route path="/Netflix-clone" element={<LoginScreen />} />
                ) : (
                    <Route path="/Netflix-clone" element={<BaseComponent />}>
                        <Route index element={<HomeScreen />} />
                        (<Route path="/Netflix-clone/profile" element={<ProfileScreens />} />)
                    </Route>
                )}
            </Routes>
        </div>
    );
}

export default App;
