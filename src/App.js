import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <Header />
        <Main />
        <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
