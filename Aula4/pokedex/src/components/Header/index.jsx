import { Outlet, useNavigate } from 'react-router-dom';
import './style.css';

function Header() {

    const navigate = useNavigate();

    function goToHome() {
        navigate('/');
    }

    function goToAbout() {
        navigate('/about');
    }

    return (
        <div>
            <div id="containerHeader">
                <h3 onClick={() => goToHome()}>Home</h3>
                <h3 onClick={() => goToAbout()}>About</h3>
            </div>
            
            <Outlet />
        </div>
    )
}

export default Header;