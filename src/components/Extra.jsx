const Extra = ({ extra }) => {
  const lang = extra.languages;
  const hobbies = extra.hobbies;
  return (
    <>
      <h3>Languages: </h3>
      <ul>
        {lang.map((l) => {
          return <li key={l}>{l}</li>;
        })}
      </ul>

      <h3>Hobbies: </h3>
      <ul>
        {hobbies.map((h) => {
          return <li key={h}>{h}</li>;
        })}
      </ul>
    </>
  );
};

export default Extra;
