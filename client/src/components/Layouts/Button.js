import styled from 'styled-components';

export const But = styled.button`
    background-color: #00C9A7;
    margin: 1.5rem .5rem;
    padding: 1rem; 
    border-radius: 7px;
    font-size: 1.2rem;
    font-weight: 700;
    color: black;
    border: 1px solid black;
    text-decoration: none;
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    :hover{
        transform: translateY(0) scale(1.1);
        background-color: #95E06C;
    }
`;
