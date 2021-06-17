import React from 'react';
import { useDispatch} from 'react-redux';
import { orderAttackDesc} from '../../actions/pokemonsAction';

const OrderByAttackDesc = () => {
    const dispatch = useDispatch();

      const handleSubmit = e => {
        e.preventDefault();
        dispatch(orderAttackDesc())
      }

    return (
        <>
            <form
            onSubmit={handleSubmit}>
                <button
                    type='submit'
                >
                    Attcak Desc
            </button>

            </form>

        </>
    );
}

export default OrderByAttackDesc;