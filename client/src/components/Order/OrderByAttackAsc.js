import React from 'react';
import { useDispatch } from 'react-redux';
import { orderAttackAsc } from '../../actions/pokemonsAction';

import styled from 'styled-components';

const Button = styled.button`
background-color: #00C9A7;
margin: 1rem;
padding: 1rem 2rem;
border-radius: 7px;
font-size: 1.5rem;
font-weight: 700;
color: black;
border: 1px solid black;
text-decoration: none;
`;

const OrderByAttackAsc = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(orderAttackAsc())
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}>
                <Button
                    type='submit'
                >
                    Attack &uarr;
            </Button>

            </form>

        </>
    );
}

export default OrderByAttackAsc;