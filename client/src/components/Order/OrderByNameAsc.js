import React  from 'react';
import { useDispatch } from 'react-redux';
import { orderNameAsc } from '../../actions/pokemonsAction';

import styled from 'styled-components';

const Button = styled.button`
background-color: #00C9A7;
margin-top: 1rem;
padding: 1rem 2rem;
border-radius: 7px;
font-size: 1.5rem;
font-weight: 700;
color: black;
border: 1px solid black;
text-decoration: none;
`;

const OrderByNameAsc = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(orderNameAsc())
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}>
                < Button
                    type='submit'
                >
                    Name &uarr;
            </ Button>
            </form>

        </>
    );
}

export default OrderByNameAsc;