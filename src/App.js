import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <h1>HELLO??????</h1>
        <p>
          Hello World, does this work?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          WHY DOES THIS NOT DEPLOY
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
