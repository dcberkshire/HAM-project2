import styled from 'styled-components'

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: 0.8em;
        padding: 8px;
    `,

    large: () => `
        font-size: 1.5em;
        padding: 16px 32px;
    `,
}

export const AboutButton = styled.button`
    background-color: skyblue;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    `;
