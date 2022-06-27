export default function UserDetails({user}){
    return(
        <div>
            <ol>
                <ul><b>Name:</b> {user.name} </ul>
                <ul><b>UserName:</b> {user.username}</ul>
                <ul><b>Address</b> {user.address.city} </ul>
            </ol>
        </div>
    );
}