import { FaUser, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import type { Iplayer } from "../types/player";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers:Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const PlayerCard = ({ 
  player,
   coin,
    setCoin, 
    selectedPlayers,
     setSelectedPlayers
     }: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  console.log(coin, setCoin, "from card");

  const handleSelectPlayer = () => {
    setIsSelected(true);

    const newCoinPrice = coin - player.price;

    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      toast.success(`${player.playerName} is purchased successfully`);
    } else {
      toast.error("Coin is no Sufficiant to purchase");
    }
  };

  // setSelectedPlayers([...selectedPlayers, player])
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Player Image */}
      <div className="relative overflow-hidden">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-72 w-full  transition duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-4 top-4">
          <span className="badge badge-primary px-4 py-3 font-semibold shadow-lg">
            {player.playerType}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
          <FaStar className="text-yellow-400" />
          <span>4.8</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-body p-6">
        {/* Player Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaUser />
          </div>

          <div>
            <h2 className="text-xl font-bold">{player.playerName}</h2>

            <div className="mt-1 flex items-center gap-1 text-sm text-base-content/60">
              <FaMapMarkerAlt className="text-primary" />
              {player.origin}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Player Information */}
        <div className="grid grid-cols-2 gap-4">
          {/* Batting */}
          <div className="rounded-2xl bg-base-200 p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-base-content/50">
              Batting
            </p>

            <p className="font-semibold">{player.battingStyle}</p>
          </div>

          {/* Bowling */}
          <div className="rounded-2xl bg-base-200 p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-base-content/50">
              Bowling
            </p>

            <p className="font-semibold">{player.bowlingStyle}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-5 flex items-center justify-between">
          {/* Price */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
              Player Price
            </p>

            <h3 className="text-2xl font-extrabold text-primary">
              ${player.price}
            </h3>
          </div>

          {/* Button */}
          <button
            onClick={() => handleSelectPlayer()}
            className={`btn btn-primary rounded-xl px-5 shadow-md transition hover:scale-105`}
            disabled={isSelected ? true : false}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

// import { FaUser } from 'react-icons/fa';
// import type { Iplayer } from '../types/player';

// const PlayerCard = ({player}:{player:Iplayer}) => {
//     return (
//         <div className="card bg-base-100 rounded-2xl shadow-sm">
//           <figure>
//             <img className='h-80 w-80'
//               src={player.playerImg}
//               alt="Shoes" />
//           </figure>
//           <div className="card-body space-y-3">

//             <h2 className="card-title">
//                 <FaUser /> {player.playerName}</h2>
//                 <div className='flex justify-between gap-4'>
//                     <p className='font-semibold'>{player.origin}</p>
//                     <button className='btn'>{player.playerType}</button>
//                 </div>
//                 <div className='divider'/>
//                 <h2 className=' font-semibold text-xl'>Rating</h2>
//                  <div className='flex justify-between gap-4'>
//                     <p className='font-semibold'>{player.battingStyle}</p>
//                     <button className='btn'>{player.bowlingStyle}</button>
//                 </div>
//             <div className="card-actions justify-between items-baseline-last">
//                 <h2 className='font-bold'>${player.price}</h2>
//               <button className="btn btn-primary">Choose Player</button>
//             </div>
//           </div>
//         </div>
//     );
// };

// export default PlayerCard;
