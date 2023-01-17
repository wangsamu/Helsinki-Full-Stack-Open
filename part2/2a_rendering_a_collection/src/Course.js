const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, cur) => acc + cur.exercises, 0);
  return <h3>total of {sum} exercises </h3>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part, index) => {
      console.log(part, index);
      return <Part key={part.name} part={parts[index]} />;
    })}
  </>
);

const Course = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
    {
      name: 'redux',
      exercises: 11,
    },
    {
      name: 'random',
      exercises: 100,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        // sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}
        parts={parts}
      />
    </div>
  );
};

export default Course;
