import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreens";
import LoginScreen from "./screens/LoginScreens";

function App() {
    const user = null;
    return (
        <div className="app">
            {!user ? (
                <LoginScreen />
            ) : (
                <Routes>
                    <Route path="/Netflix-clone" element={<HomeScreen />} />
                </Routes>
            )}
        </div>
    );
}

export default App;
