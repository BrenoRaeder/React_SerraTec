import { Outlet, useNavigate } from 'react-router-dom';
import { 
    Container,
    LeftContainer,
    LogoContainer,
    NavList,
    NavItem,
    RightContainer,
    ProfileContainer
} from './style.js';

function Header() {

    const navigate = useNavigate();

    function goToHome() {
        navigate('/');
    }

    function goToAbout() {
        navigate('/about');
    }

    return (
        <>
            <Container>
                <LeftContainer>
                    <LogoContainer>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" />
                        <span><span id="my">My</span>Pokedex</span>
                    </LogoContainer>

                    <NavList>
                        <NavItem onClick={() => goToHome()}>Home</NavItem>
                        <NavItem onClick={() => goToAbout()}>About</NavItem>
                    </NavList>
                </LeftContainer>
                
                <RightContainer>
                    <ProfileContainer>
                        <span>Welcome, Breno</span>
                        <img src="https://avatars.githubusercontent.com/u/69677453?v=4"/>
                    </ProfileContainer>
                </RightContainer>
                
            </Container>
            <Outlet />
        </>
        
    )
}

export default Header;