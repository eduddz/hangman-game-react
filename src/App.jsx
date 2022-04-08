
import "./App.scss";

import { Correct } from "./components/Correct";
import { Header } from "./components/Header";
import { Keyboard } from "./components/Keyboard";

export function App() {

  const words = [
    'uva', 
    'abacate', 
    'limao', 
    'ventilador', 
    'ovo',
    'javascript',
    'typescript',
    'html',
    'youtube'
  ];
  
  const secretWord = words[Math.floor(Math.random() * words.length)];

  const letterWrong = [];
  const letterAllRight = [];

  document.addEventListener("click", (event) => {
    const letter = event.target.value
    if(letter) {
      if(letterWrong.includes(letter)) {
        showLetterRepeat();
      } else {
        if (secretWord.includes(letter)) {
          letterAllRight.push(letter);
        } else {
          letterWrong.push(letter);
        }
      }
      updateGame();
    }
  })

  function showLettersWrong() {
    const letterwrong = document.querySelector("#letterwrong");
    letterwrong.innerHTML = "";
    letterWrong.forEach(letter => {
      letterwrong.innerHTML += `<span>${letter}</span>`
    })
  }

  function showLettersAllRight() {
    const letterallright = document.querySelector("#letterallright");
    letterallright.innerHTML = "";
    secretWord.split("").forEach(letter => { 
      if(letterAllRight.includes(letter)) {
        letterallright.innerHTML += `<span class="spanCorrect">${letter}</span>`
      } else {
        letterallright.innerHTML += `<span class="spanCorrect">_</span>`
      }
    })
  }

  function showWinner() {
    const letterallright = document.querySelector("#letterallright")
      if(secretWord === letterallright.textContent) {
        setTimeout(() => {
          alert("🏆 Parabéns! 🔥 Você ganhooooou!")
      }, 500)
    }
  }

  function showLetterRepeat() {
    alert("Já usou a letra")
  }

  function updateGame() {
    showLettersWrong();
    showLettersAllRight();
    showWinner();
  }

  return (
    <>
    <Header />
    <Correct>
      <div id="letterallright"></div>
    </Correct>
    <Keyboard />
    <h2>Letras Erradas</h2>
    <div id="letterwrong"></div>
    </>
  )
}
