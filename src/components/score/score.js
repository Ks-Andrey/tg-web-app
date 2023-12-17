import './score.css';

const Score = ({ score, setScore, basket, tovarid }) => {
  const onPlus = () => {
    updateScore(1);
  };

  const onMinus = () => {
    if (score !== 1) {
      updateScore(-1);
    } else {
      removeItem();
    }
  };

  const updateScore = (change) => {
    const newTovars = basket.map((item) =>
      item.tovarid === tovarid ? { ...item, length: item.length + change } : item
    );

    setScore(newTovars);
  };

  const removeItem = () => {
    const updatedBasket = basket.filter((item) => item.tovarid !== tovarid);
    setScore(updatedBasket);
  };

  return (
    <div className="score__container">
      <button onClick={onPlus}>+</button>
      <span>{score}</span>
      <button onClick={onMinus}>-</button>
    </div>
  );
};

export default Score;
