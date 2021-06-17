import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { orderAttackAsc} from '../../actions/pokemonsAction';

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
                <button
                    type='submit'
                >
                    Attcak Asc
            </button>

            </form>

        </>
    );
}

export default OrderByAttackAsc;