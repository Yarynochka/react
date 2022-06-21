import './SimpsonCharacters.css'
function simpsonCharacters(props) {
    let {itemName, picture, text} = props;


    let simpsonCharacters = 'simpsonCharacters'
    return (
        <div className={simpsonCharacters}>

            <h2>{itemName}</h2>
            <img src={picture} alt={itemName}/>
            <p> {text}</p>

        </div>
    );
}
export default simpsonCharacters;