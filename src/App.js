// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/Mainpage';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({ name: "Steve" });
  return (
    <>
      <div className='text-center'>
      <Navbar />
      <MainPage user={user} />
    </div>
    </>
  );
}

export default App;
