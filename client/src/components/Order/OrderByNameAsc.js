import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { orderNameAsc } from '../../actions/pokemonsAction';

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
                <button
                    type='submit'
                >
                    Name asc
            </button>

            </form>

        </>
    );
}

export default OrderByNameAsc;