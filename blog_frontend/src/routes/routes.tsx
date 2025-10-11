// routes.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Articles from '../pages/Articles';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Friends from '../pages/Friends';



export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/friends' element={<Friends />} />
        </Routes>

    );
}
