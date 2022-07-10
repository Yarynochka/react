import {useForm} from "react-hook-form";
import {addUsers} from "../../services/users.api";

export default function Users () {
const {register,handleSubmit,formState:{errors}}=useForm(
    {
        defaultValues:{
            name:'name',
            username:'username',
            email:'email',
            country:'country'
        }
    }
);
const submit=(obj)=>{
    addUsers(obj).then(({data})=>console.log(data))
}

    return (
        <div> <form onSubmit={handleSubmit(submit)}>
            <input type='text' {...register('name',{required:true})}/>
            <input type='text' {...register('username',{required:true})}/>
            <input type='text' {...register('email')}/>
            <input type='text' {...register('country')}/>
            <button>Submit</button>
        </form>
        </div>
    );
}