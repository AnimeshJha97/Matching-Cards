import "./components/card/Card.css"
import './App.css';
import { useState, useEffect, createContext } from 'react';
import Card from './components/card/Card';
export const dataContext = createContext()
function App() {
  const [clicked, setclicked] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [cardText, setcardText] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "H", "G", "F", "E", "D", "C", "B", "A"])
  const [flag, setFlag] = useState("")
  Array.prototype.shuffle = function () {
    var i = this.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1))
      temp = this[j];
      this[j] = this[i];
      this[i] = temp
    }
    return this;
  }

  const shuffleHandler = () => {
    var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "H", "G", "F", "E", "D", "C", "B", "A"];
    var result = arr.shuffle();
    setcardText(result)
  }
  useEffect(() => {
    shuffleHandler()
  }, [])

  return (
    <div className="App" >
      <div className="game-container">

        <dataContext.Provider value={[cardText, flag, setFlag, clicked, setclicked]} >
          <Card indx={0} disabled={clicked[0]} />
          <Card indx={1} disabled={clicked[1]} />
          <Card indx={2} disabled={clicked[2]} />
          <Card indx={3} disabled={clicked[3]} />
          <Card indx={4} disabled={clicked[4]} />
          <Card indx={5} disabled={clicked[5]} />
          <Card indx={6} disabled={clicked[6]} />
          <Card indx={7} disabled={clicked[7]} />
          <Card indx={8} disabled={clicked[8]} />
          <Card indx={9} disabled={clicked[9]} />
          <Card indx={10} disabled={clicked[10]} />
          <Card indx={11} disabled={clicked[11]} />
          <Card indx={12} disabled={clicked[12]} />
          <Card indx={13} disabled={clicked[13]} />
          <Card indx={14} disabled={clicked[14]} />
          <Card indx={15} disabled={clicked[15]} />
        </dataContext.Provider>
      </div>
      <button onClick={shuffleHandler}>refresh</button>
    </div>
  );
}

export default App;