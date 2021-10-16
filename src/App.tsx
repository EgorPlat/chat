import { useMemo, useState } from 'react';
import './App.css';
import { IUser } from './Interfaces/Global';
import Test from './Test/Test';

function App() {
  
  const [ws, setWs] = useState<any>();
  const [isWs, setIsWs] = useState<boolean>(true);
  
  useMemo(() => {
    setWs(() => new WebSocket('ws://immense-shore-69636.herokuapp.com'))
  }, [isWs])
  const users: IUser[] = [
    { name: "Danila", phone: 896283135, address: { city: "Penza", street: "Uhtomskogo" } },
    { name: "Egor", phone: 893571512, address: { city: "Penza", street: "Uhtomskogo" } }
  ]
  return (
    <div className="App">
      <div className="Test">
        <Test title="Тестовый компонент для Websoket" ws={ws}/>
      </div>
    </div>
  );
}

export default App;
