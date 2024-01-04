import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreens";
import LoginScreen from "./screens/LoginScreens";

function App() {
    const user = null;
    return (
        <div className="app">
            <Routes>
                {!user ? <Route path="/Netflix-clone" element={<LoginScreen />} /> : <Route path="/Netflix-clone" element={<HomeScreen />} />}
            </Routes>
        </div>
    );
}

export default App;
