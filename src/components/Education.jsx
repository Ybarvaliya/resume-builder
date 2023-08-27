const Education = ({ education }) => {
  return (
    <>
      <h3>Education:</h3>
      <ul>
        <li>
          <h4>{education[0].institute}</h4>
          <p>{education[0].degree}</p>
          <p>Marks/GPA: {education[0].marks}</p>
          <p>Time: {education[0].time}</p>
          <p>Description: {education[0].description}</p>
        </li>
      </ul>
    </>
  );
};

export default Education;
