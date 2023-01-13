import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (100 * good) / total + '%';

  return (
    <div>
      <h1>statistics</h1>
      {total ? (
        <table>
          <tbody>
            <StatisticLine text={'good'} value={good} />
            <StatisticLine text={'neutral'} value={neutral} />
            <StatisticLine text={'bad'} value={bad} />
            <StatisticLine text={'all'} value={total} />
            <StatisticLine text={'average'} value={average} />
            <StatisticLine text={'positive'} value={positive} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (state, setState) => {
    return () => {
      setState(state + 1);
    };
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} handleClick={handleClick(good, setGood)} />
      <Button text={'neutral'} handleClick={handleClick(neutral, setNeutral)} />
      <Button text={'bad'} handleClick={handleClick(bad, setBad)} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
