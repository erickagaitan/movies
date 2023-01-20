import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Details from './page/Details/Details';
import Home from './page/home/Home';

function App() {
  return (
    <div>
       <BrowserRouter>
         <Header />
        <div className='App'>
          <Routes>
            <Route path="/"element={<Home/>}></Route>
            <Route path="/details/:id"element={<Details/>}></Route>

          </Routes>
        </div>
      <Footer /> 
       </BrowserRouter>
    
    </div>
  );
}

export default App;
