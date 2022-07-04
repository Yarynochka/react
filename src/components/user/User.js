export default function User ({item,chosen}){
const onclick=()=>{
    chosen(item.id);
}
    return (
            <div>

                {item.id}- {item.name}
                <button onClick={onclick}> get more</button>

            </div>
    );
}