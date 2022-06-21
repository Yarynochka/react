import './App.css';
import SimpsonFamily from "./components/SimpsonFamily/SimpsonFamily";
import SimpsonCharacters from "./components/SimpsonCharacters/SimpsonCharacters";

function App() {

  return (
      <div className="wrap">
        <SimpsonFamily/>
        <div className={'SimpsonCharacters'}>
          <SimpsonCharacters
              itemName={'Homer Simpson'}
              picture={'https://i.pinimg.com/originals/43/1b/76/431b76b76ace7ddbdd5f9ecf4f879d00.png'}
              text={'Homer Jay Simpson (voiced by Dan Castellaneta) is the protagonist of the show and the father of the Simpson family. He embodies several American working class stereotypes: he is crude, overweight, incompetent, clumsy, thoughtless and a borderline alcoholic.'}
          />

          <SimpsonCharacters
              itemName={'Marge Simpson'}
              picture={'https://telegramzy.ru/wp-content/uploads/2017/10/simpsons-27.png'}
              text={'Marjorie Jacqueline "Marge" Simpson ' +
                  'is the well-meaning and extremely patient wife of Homer and mother of Bart, ' +
                  'Lisa and Maggie. She often acts as the voice of reason, but displays exaggerated ' +
                  'behavior traits of stereotypical mothers and takes the blatant dysfunctionality of her ' +
                  'family for granted,' +
                  'unlike the other family members, who are aware that they are eccentric.'}
          />

          <SimpsonCharacters
              itemName={'Bart Simpson'}
              picture={'https://i.pinimg.com/originals/31/35/0a/31350a066cbc56517800745360f32222.png'}
              text={'Bartholomew JoJo "Bart" Simpson  is the eldest child and ' +
                  'only son in the family—at age 10. Bart\'s most prominent character ' +
                  'traits are his mischievousness, rebelliousness, disrespect for authority and sharp wit. During the ' +
                  'first two seasons of The Simpsons,' +
                  ' Bart was the shows main character.'}
          />

          <SimpsonCharacters
              itemName={'Lisa Simpson'}
              picture={'https://i.pinimg.com/originals/6e/88/fe/6e88fef290f1d619070378bc9db676f2.png'}
              text={'Lisa Marie Simpson is the eldest daughter and middle child of the family. She is an extremely intelligent 8-year-old girl, one of the most intelligent characters on the show. ' +
                  'Lisa political convictions are generally socially liberal.' +
                  'She is a vegetarian, and a supporter of the Free Tibet movement, and while still supportive of the Christian church in which she was raised,' +
                  ' Lisa became a practicing Buddhist following her decision to follow the Noble Eightfold Path.'}
          />

          <SimpsonCharacters
              itemName={'Maggie Simpson'}
              picture={'https://w7.pngwing.com/pngs/262/936/png-transparent-maggie-simpson-homer-simpson-bart-simpson-marge-simpson-lisa-simpson-bart-simpson-food-springfield-cartoon-thumbnail.png'}
              text={'Margaret Evelyn Lenny "Maggie" Simpson is the youngest of the five main family members and is almost always seen as a baby.' +
                  ' She has blonde spiked hair like Lisa. Her first word was "daddy", shown at one point after Homer tucks her in. ' +
                  'She is almost 2 years old and still uses a pacifier despite teething, although this was mentioned in a Treehouse of ' +
                  'Horror episode ("Starship Poopers") and is not considered canon.'}
          />

        </div>









      </div>
  );
}

export default App;
