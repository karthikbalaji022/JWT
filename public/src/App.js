import React,{createContext,useState} from 'react'
import './App.css';
import Loginform from './components/Loginform';
import Dashboard from './components/Dashboard';
export const propsPass=createContext();

function App() {
  const [present,SetPresent]=useState(false);

  return (
    <propsPass.Provider value={{present,SetPresent}}>

    <div className="App">
     <Loginform/>
     <Dashboard/>
    </div>
    </propsPass.Provider>
  );
}

export default App;
