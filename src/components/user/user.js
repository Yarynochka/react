export default function User(props){
    let {user, choseUser} = props;
    return(
            <div>
                ID: {user.id} <b>Name:</b> {user.name}
<button onClick={()=>{
    choseUser(user)
}}> details </button>
            </div>);
}