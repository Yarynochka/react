import './x.css'
function X (props) {
    let {id,name,status,species,gender,image}=props;

    let container='container';
    return(
        <div className={container}>
            <h2>{name}</h2>
            <ul>
                <li>{id}</li>
                <li>{status}</li>
                <li>{species}</li>
                <li>{gender}</li>
            </ul>
            <img src={image} alt={name}/>
        </div>

    );
}
export default X;
