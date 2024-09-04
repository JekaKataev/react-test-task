import React from 'react';
import { useDispatch } from 'react-redux';
import { addSquare, removeSquare } from './store/squaresSlice';
import SquareContainer from './components/SquareContainer';
import './styles/App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="button-container">
        <button className="button button-add" onClick={() => dispatch(addSquare())}>Добавить</button>
        <button className="button button-remove" onClick={() => dispatch(removeSquare())}>Удалить</button>
      </div>
      <SquareContainer />
    </div>
  );
};

export default App;