import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Blog } from "../pages/Blog";
import { Projects } from "../pages/Projects";
import { Techs } from "../pages/Techs";
import { Contact } from "../pages/Contact";
import { Post } from "../pages/Post";
import { Login } from "../pages/Login";
import { Xp } from "../pages/Xp";
import { Dashboard } from "../pages/Dashboard";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/blog" element={ <Blog /> } />
                <Route path="/blog/:id" element={ <Post /> } />
                <Route path="/experiencia" element={ <Xp /> } />
                <Route path="/projetos" element={ <Projects /> } />
                <Route path="/tecnologias" element={ <Techs /> } />
                <Route path="/contato" element={ <Contact /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
            </Routes>
        </BrowserRouter>
    );
};
