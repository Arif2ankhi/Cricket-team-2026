import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Player from "./players/Players";
import type { Iplayer } from "./types/player";


const playersFetch = async(): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;

}
function App() {
  const playersPromise = playersFetch();
  const [coin, setCoin] = useState(1500)
  
  

  return (
    <>
    <Nav coin ={coin}/>
    <Banner></Banner>
   <Suspense fallback ={<h2>Loading......</h2> }>
     <Player playersPromise = {playersPromise} coin ={coin} setCoin={setCoin}></Player>
   </Suspense>
    
      
    
    </>
  )
}

export default App
