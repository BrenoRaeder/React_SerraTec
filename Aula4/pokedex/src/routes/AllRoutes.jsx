import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Header from '../components/Header';

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Header} path="/">
                    <Route Component={Home} path="/" />
                    <Route Component={About} path="/about" /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
