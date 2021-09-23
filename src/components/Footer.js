import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Wrapper>
            <ul>
                <li><a href="#">Tesla &copy; 2021</a></li>
                <li><a href="#">Privacy & Legal</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Engage</a></li>
                <li><a href="#">Locations</a></li>
            </ul>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.footer`
    padding: 0 0 1.2rem 0;
    background: #fff;
    color: #5c5d61;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li {
        opacity: 0.8;
        font-size: 13px;
        padding: 0 10px
    }
`