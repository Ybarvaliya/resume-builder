const Projects = ({projects}) => {
    return (
        <>
            <h3>Projects: </h3>
            <ul>
            {projects.map((p) => {
                return <li key={p.name}>
                    <h4>{p.name}</h4>
                    <p>{p.description}</p>
                </li>
            })}
            </ul>
        </>
    )
}

export default Projects