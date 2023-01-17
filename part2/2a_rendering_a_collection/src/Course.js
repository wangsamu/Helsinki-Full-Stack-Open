const Header = ({ name }) => <h2>{name}</h2>;

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

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total
        // sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}
        parts={parts}
      />
    </div>
  );
};

export default Course;
