const Profile = ({profile}) => {
    return (
        <>
            <h1>{profile.name}</h1>
            <h2>{profile.subtitle}</h2>
            <p>{profile.description}</p>
            <hr />
            <h3>Contact: </h3>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <p>Linkdin: {profile.linkdin}</p>
            <p>Address: {profile.address}</p>
        </>
    )
}

export default Profile