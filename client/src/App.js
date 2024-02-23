import './App.css';
import './style.css';
import 'stream-http';
import "font-awesome/css/font-awesome.min.css";
import Header from './Component/Header/Header';
// import Footer from './Component/Header/Footer';
import Home from './Component/MainComponent/Home';
import Contact from './Component/MainComponent/Contact';
import Signup from './Component/MainComponent/Signup';
import PlayGames from './Component/MainComponent/Playgames';
import Login from './Component/MainComponent/Login';
// eventcard imports

import Bgmi from './Component/MainComponent/eventcard/Bgmi';
import Coc from './Component/MainComponent/eventcard/Coc';
import Cod from './Component/MainComponent/eventcard/Cod';
import League from './Component/MainComponent/eventcard/League';
import Pubg from './Component/MainComponent/eventcard/Pubg';
import Warjone from './Component/MainComponent/eventcard/Warjone';
import Counter from './Component/HomeComponent/Counterr';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setLoginUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const handleLogin = (userData) => {
    // Logic to set user data and update isLoggedIn state upon successful login
    setLoginUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login setLoginUser={setLoginUser} />} />
        <Route path='/PlayGames' element={user && user._id ? <PlayGames setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
        {/* <Route path='/Playgames' element={<PlayGames />} /> */}
        {/* eventcard */}
        <Route path='/Bgmi' element={<Bgmi />} />
        <Route path='/Coc' element={<Coc />} />
        <Route path='/Cod' element={<Cod />} />
        <Route path='/League' element={<League />} />
        <Route path='/Pubg' element={<Pubg />} />
        <Route path='/Warjone' element={<Warjone />} />
        <Route path='/Counter' element={<Counter />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
