import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #c9718a;
    color: #ffffffde;
    align-items: center;
    height: 70px;
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 100%;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 5px;

    img {
        width: 40px;
    }

    #my {
        color: #8c1c27;
    }
`;

export const NavList = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;
`;

export const NavItem = styled.h3`
    margin: 0;
    cursor: pointer;
    height: 96%;
    display: flex;
    align-items: center;
    transition: .2s;

    &:hover {
        border-bottom: 3px solid #fff;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    width: 20%;
    justify-content: flex-end; 
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;
    gap: 20px;

    img {
        width: 40px;
        border-radius: 50%;
    }
`;