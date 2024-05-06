import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad, sum }) => {
	if (sum === 0) {
		return (
			<div>
				<p>No feedback given</p>
			</div>
		);
	}
	return (
		<div>
			<table>
				<tbody>
					<StatisticLine text="good" value={good} />
					<StatisticLine text="neutral" value={neutral} />
					<StatisticLine text="bad" value={bad} />
					<StatisticLine text="all" value={sum} />
					<StatisticLine
						text="average"
						value={(good * 1 + neutral * 0 + bad * -1) / sum}
					/>
					<StatisticLine text="positive" value={`${(good / sum) * 100} %`} />
				</tbody>
			</table>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	let sum = good + neutral + bad;
	return (
		<div>
			<h1>give feedback</h1>
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad + 1)}>bad</button>
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} sum={sum} />
		</div>
	);
};

export default App;
