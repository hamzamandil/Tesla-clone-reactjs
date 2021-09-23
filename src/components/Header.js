import React, {useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/car/carSlice";
import {useSelector} from "react-redux";

function Header() {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuStatus = () => {
        setOpenMenu(true);
    }

    const handelMenuClose = () => {
        setOpenMenu(false);
    }

    const cars = useSelector(selectCars);

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <Menu>
            {
                cars && cars.map((car,i) => (
                    <a href="#" key={i}>{car}</a>
                ))
            }
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#"  onClick={handleMenuStatus}>Menu</a>
            </RightMenu>

            <SideBar show={openMenu}>
                <CloseWrapper>
                    <CustomClose onClick={handelMenuClose}/>
                </CloseWrapper>
                <ul>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Comercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Investor Relations</a></li>
                </ul>
            </SideBar>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    min-height: 60px;
    position:fixed;
    top: 0;
    left: 0;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items:center;
    a {
        font-weight: 600;
        letter-spacing: 1px;
        margin-right: 10px;
    }
`
const SideBar = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 300px;
    z-index: 999;
    padding: 20px;
    display: flex;
    align-items: start;
    justify-content: start;
    transition: all 0.3s ease;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

    ul {
        list-style: none;
        margin: 2rem 0;
    }
    li {
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.05);

        a {
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    position: fixed;
    right: 1rem;
    top: 1rem;
`