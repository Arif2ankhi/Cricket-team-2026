import React, { use } from 'react';
import type { Iplayer } from '../types/player';
import AvailablePlayers from './AvailablePlayers';

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>
}
const Player = ({playersPromise}: PlayersProps) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    console.log(players, 'players');
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-3xl'>Available Players</h2>
                <div>
                    <button className='btn btn-success'>Available</button>
                    <button className='btn '>Select</button>
                    
                </div>
            </div>
            <AvailablePlayers players = {players}/>
        </div>
    );
};

export default Player;