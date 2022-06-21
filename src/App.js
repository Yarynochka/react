import './App.css';
import X from "./components/x";


function App() {
  return (
    <div className='wrap'>
<X
    name={'Diablo Verde'}
    id={'93'}
    status={'Dead'}
    species={'Mythological Creature'}
    gender={'Male'}
    image={'https://rickandmortyapi.com/api/character/avatar/93.jpeg'}
/>
   <X
   name={'Doofus Rick'}
   id={'103'}
   status={'unknown'}
   species={'Human'}
   gender={'Male'}
   image={'https://rickandmortyapi.com/api/character/avatar/103.jpeg'}
   />

   <X
    name={'Evil Beth Clone'}
    id={'116'}
    status={'Dead'}
    species={'Human'}
    gender={'Female'}
    image={'https://rickandmortyapi.com/api/character/avatar/116.jpeg'}
    />
        <X
            name={'Gene'}
            id={'137'}
            status={'Alive'}
            species={'Human'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/137.jpeg'}
        />
        <X
            name={'Michael'}
            id={'567'}
            status={'Alive'}
            species={'Mythological Creature'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/567.jpeg'}
        />

        <X
            name={'Turkey Morty'}
            id={'759'}
            status={'Alive'}
            species={'Animal'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/759.jpeg'}
        />

    </div>
  );
}

export default App;
