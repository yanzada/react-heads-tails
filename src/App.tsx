import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeadsOrTails from './CoinToss/CoinToss';

import Avatar1 from './assets/avatar1.png';
import Avatar2 from  './assets/avatar2.png';

interface CustomCoinToss {
image: string;
name: string;
}

const initialCustomCoinToss: CustomCoinToss[] = [
{
image: Avatar1,
name: 'Avatar 1',
},
{
image: Avatar2,
name: 'Avatar 2',
}
];

function App() {
const [myJson, setMyJson] = useState<CustomCoinToss[]>(initialCustomCoinToss);

useEffect(() => {
// Fetch data or perform other async tasks here
}, []);

return (
<div className="App">
<HeadsOrTails 
  headsWinner="rand"
  customCoinToss={myJson} 
  blackout={true}
  closeAutomatically={false}
  duration="normal"
  />
</div>
);
}

export default App;