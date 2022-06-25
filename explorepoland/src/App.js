
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Posts from './Components/Posts';
import Form from './Components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
          <Posts/>
          <Footer/>  
      </header>
    </div>
  );
}

export default App;
