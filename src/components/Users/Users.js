import {useEffect,useState} from "react";
import {getUsers} from "../../services/users.apa.services";
import User from "../User/User";

export default function Users ({elevate}) {
    let [users, setUsers]=useState([]);
    useEffect(()=>{
    getUsers().then(({data})=>setUsers([...data]));
    },[])



    return (
        <div >
            {
                users.map(user => <User user={user} key={user.id} elevate={elevate}/>)
            }
        </div>
    );
};