import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Player from "./players/Players";
import type { Iplayer } from "./types/player";


const playersFetch = async():Promise<Iplayer[]> =>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;

}
function App() {
  const playersPromise = playersFetch();
  
  

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
   <Suspense fallback ={<h2>Loading......</h2> }>
     <Player playersPromise = {playersPromise}></Player>
   </Suspense>
    
      
      {/* <button className="btn btn-primary">Button</button> */}
    </>
  )
}

export default App
