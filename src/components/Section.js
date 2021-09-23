import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImage={props.bgImage}>
            <Fade bottom>
                <TextItem>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </TextItem>
            </Fade>
            
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                        {props.leftBtn}
                        </LeftButton>
                        {props.RightBtn && 
                            <RightButton>
                            {props.RightBtn}
                            </RightButton>
                        }
                        
                    </ButtonGroup>
                </Fade>
                <ArrowDown src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url('./images/${props.bgImage}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

const TextItem = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1 {
        letter-spacing: 1.2px;
    }
    p {
        padding: 5px;
        font-size: 15px;
        opacity: 0.8;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 35px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    opacity: 0.82;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 0.6rem
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: black;
    opacity: 0.5:
`

const ArrowDown = styled.img`
    margin: 10px 0;
    height: 40px;
    cursor: pointer;
    animation: animateDown infinite 2s ease;
    overflow-x: hidden;
`
const Buttons = styled.div`
    text-align: center;
`