import React from 'react';
import { Route, Routes} from 'react-router-dom';
import HomeFit from './components/home';
import NavBar from './components/navbar';
import Register from './components/signUp';
import Login from './components/loginForm';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className='route-container'>
        <Routes>
        <Route path='/' element={<HomeFit />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      </div>    
    </React.Fragment>
  );
}

export default App;
