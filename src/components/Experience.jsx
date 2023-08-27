const Experience = ({experience}) => {
    return (
        <>
            <h3>Experience: </h3>
            <h4>{experience[0].company}</h4>
            <p>Role: {experience[0].role}</p>
            <p>Time: {experience[0].time}</p>
            <p>Description: {experience[0].description}</p>
        </>
    )
}

export default Experience