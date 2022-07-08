export default function User({user,elevate}){
    const onclick=()=>{
        elevate(user.id);
    }
    return(
        <div>
            {user.id} - {user.name}
            <button onClick={onclick}> click </button>
        </div>
    );
}