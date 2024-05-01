const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
		</div>
	);
};

const Part = ({ part }) => {
	return (
		<div>
			<p>
				{part.name} {part.exercises}
			</p>
		</div>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			<Part part={parts.part1} />
			<Part part={parts.part2} />
			<Part part={parts.part3} />
		</div>
	);
};

const Total = (props) => {
	return (
		<div>
			<p>
				Number of exercises{' '}
				{props.exercises1 + props.exercises2 + props.exercises3}
			</p>
		</div>
	);
};

const App = () => {
	const course = 'Half Stack application development';
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10,
	};
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7,
	};
	const part3 = {
		name: 'State of a component',
		exercises: 14,
	};

	const parts = {
		part1,
		part2,
		part3,
	};

	const obj = {
		course,
		parts,
	};

	return (
		<div>
			<Header title={obj.course} />
			<Content parts={obj.parts} />
			<Total
				exercises1={obj.parts.part1.exercises}
				exercises2={obj.parts.part2.exercises}
				exercises3={obj.parts.part3.exercises}
			/>
		</div>
	);
};

export default App;
