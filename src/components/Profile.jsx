import {useSelector} from "react-redux"

function Profile(){
    const {user} = useSelector(state=>state.user);
    return (
        <div className="profile">
            <p>Username:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Location:{user.location}</p>
        </div>
    )
}
export default Profile