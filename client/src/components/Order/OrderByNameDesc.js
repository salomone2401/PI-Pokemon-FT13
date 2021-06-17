import React from 'react';
import { useDispatch} from 'react-redux';
import {orderNameDesc } from '../../actions/pokemonsAction';

const OrderByNameAsc = () => {
    const dispatch = useDispatch();



      const handleSubmit = e => {
        e.preventDefault();
        dispatch(orderNameDesc())
      }

    return (
        <>
              <form
            onSubmit={handleSubmit}>
                <button type='submit'>
                    Name desc
            </button>

            </form>

        </>
    );
}

export default OrderByNameAsc;