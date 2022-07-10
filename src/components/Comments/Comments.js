import {useForm} from "react-hook-form";
import addComment from "../../services/comments.api";

export default function Comments(){

const {register, handleSubmit}=useForm(
    {
        defaultValues:{
            name:'name',
            body:'body'
        }
    }
);
//todo
const submit=(obj)=>{
    addComment(obj).then(value=>console.log(value))
}

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name')}/>
                <input type='text' {...register('body')}/>
                <button>Add new comment</button>

            </form>


        </div>

    );
}