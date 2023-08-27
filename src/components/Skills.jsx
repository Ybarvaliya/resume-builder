const Skills = ({ skills }) => {
  const tech = skills[0].technical;
  const soft = skills[1].soft;
  return (
    <>
      
      <h3>Technical Skills: </h3>
      <ul>
      {tech.map((t) => {
        return (
          <li key={t.name}>
            <h4>{t.name}</h4>
            <p>{t.description}</p>
          </li>
        );
      })}
      </ul>
      
      <h3>Soft Skills: </h3>
      <ul>
        {soft.map((s) => {
          return <li key={s}>{s}</li>;
        })}
      </ul>
    </>
  );
};

export default Skills;
