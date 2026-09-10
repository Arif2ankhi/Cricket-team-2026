// import type {  Dispatch, SetStateAction } from "react";
// import type { Iplayer } from "../types/player";
// import PlayerCard from "./PlayerCard";

// interface ISelectedPlayersProps {
//     selectedPlayers: Iplayer[];
//     setSelectedPlayers : Dispatch<SetStateAction<Iplayer[]>>
// }

// const SelectedPlayers = ({
//     selectedPlayers,
//      setSelectedPlayers}: ISelectedPlayersProps ) => {

//     console.log(selectedPlayers, 'from selected players component');
   
//     return (
//         <div className="grid grid-cols-3gap-7 mt-7">
//             Selected Players

//             {
//              selectedPlayers.map((player)=>{
//                 return <PlayerCard player ={player}/>
//              })
//             }
//         </div>
//     );
// };

// export default SelectedPlayers;

import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../types/player";

interface ISelectedPlayersProps {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayers = ({ selectedPlayers }: ISelectedPlayersProps) => {
  return (
    <div className="mt-7">
      <h3 className="mb-4 text-xl font-bold">Selected Players ({selectedPlayers.length})</h3>

      {selectedPlayers.length === 0 ? (
        <p className="text-gray-500">No players selected yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {selectedPlayers.map((player) => (
            <div key={player.id || player.playerName} className="flex items-center justify-between rounded-xl border bg-base-100 p-4 shadow">
              <div className="flex items-center gap-4">
                <img src={player.playerImg} alt={player.playerName} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">{player.playerName}</h4>
                  <p className="text-sm text-gray-500">{player.playerType}</p>
                </div>
              </div>
              <p className="font-semibold text-primary">${player.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedPlayers;