import styled from 'styled-components'
import {AboutButton} from './Button'

const ModalWrap = styled.div`
    width: 800px;
    height: 800px;
    background-color: white;
    border: none;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem; 
 `;

const About = styled.h3`
    font-size: 2rem;
    margin-bottom: 0;
`;

const AboutDetails = styled.p`
    font-size: 1.5rem;
    max-width: 40%;
    text-align: center;
`;

export default function AboutModal(props){
    return (
    <ModalWrap>
        <About>HAM Viewer</About>
        <AboutDetails>A quick tour of objects currently hosted and available for viewing by the Harvard Art Museum.</AboutDetails>
        
    </ModalWrap>
    );
}; 