import { Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreens";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/Netflix-clone" element={<HomeScreen />} />
            </Routes>
        </div>
    );
}

export default App;
