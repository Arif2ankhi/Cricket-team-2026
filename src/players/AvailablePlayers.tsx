
;
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({players}) => {
    console.log(players, 'players from  available players' );
    
    return (
        <div className='grid grid-cols-3 gap-7  mt-3'>
            {
                players.map((player:Iplayer, ind: number) => {
                    return (
                        <PlayerCard key ={ind} player={player}/>
//  <div className="card bg-base-100 rounded-2xl shadow-sm">
//   <figure>
//     <img className='h-80 w-80'
//       src={player.playerImg}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body space-y-3">
    
//     <h2 className="card-title">
//         <FaUser /> {player.playerName}</h2>
//         <div className='flex justify-between gap-4'>
//             <p className='font-semibold'>{player.origin}</p>
//             <button className='btn'>{player.playerType}</button>
//         </div>
//         <div className='divider'/>   
//         <h2 className=' font-semibold text-xl'>Rating</h2>   
//          <div className='flex justify-between gap-4'>
//             <p className='font-semibold'>{player.battingStyle}</p>
//             <button className='btn'>{player.bowlingStyle}</button>
//         </div>      
//     <div className="card-actions justify-between items-baseline-last">
//         <h2 className='font-bold'>${player.price}</h2>
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
                    )

                })}
        </div>
    );
};

export default AvailablePlayers;