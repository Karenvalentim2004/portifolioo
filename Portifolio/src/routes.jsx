import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projetos from "./pages/projects/Projects";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projetos" element={<Projetos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
