import { useState } from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './redux/counterSlice';

const App = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>selectCount: {count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <div>
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          incrementByAmount
        </button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>
          incrementAsync
        </button>
        <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          incrementIfOdd
        </button>
      </div>
    </div>
  );
};

export default App;
