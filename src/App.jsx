import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './page/Home';
import CardMovie from './components/movieCard/CardMovie';

function App() {
  return (
    <div>
      <Header />
        <div className='App'>
        <Home/>
        <CardMovie/>
        </div>
      <Footer /> 
    </div>
  );
}

export default App;
