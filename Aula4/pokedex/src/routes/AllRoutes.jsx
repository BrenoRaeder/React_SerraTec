import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Header from '../components/Header';

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Header} path="/">
                    <Route Component={Home} path="/" />
                    <Route Component={About} path="/about" />
                    <Route Component={Login} path="/login" />

                    <Route Component={NotFound} path="*" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
