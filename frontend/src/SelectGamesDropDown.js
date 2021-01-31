import React, {useState} from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js'
import {setGameList} from './RegisterPage'


//TODO Perhaps import list of games from like steam or some API


const gameOptions = [
    { value: 'counter-strike', label: 'Counter Strike' },
    { value: 'destiny', label: 'Destiny' },
    { value: 'destiny 2', label: 'Destiny 2' },
    { value: 'rocket-league', label: 'Rocket League'},
    { value: 'apex-legends', label: 'Apex Legends'},
    { value: 'escape-from-tarkov', label: 'Escape From Tarkov'},
    { value: 'dota 2', label: 'Dota 2'},
    { value: 'fortnite', label: 'Fortnite'},
    { value: 'rust', label: 'Rust'},
    { value: 'league-of-legends', label: 'League of Legends'},
    { value: 'overwatch', label: 'Overwatch'},
    { value: 'pubg', label: 'PlayerUnknown\'s Battlegrounds'},
    { value: 'starcraft 2', label: 'StarCraft II: Wings of Liberty'},
    { value: 'super-smash-bros-ultimate', label: 'Super Smash Bros. Ultimate'},
    { value: 'tekken 7', label: 'Tekken 7'},
    { value: 'call-of-duty-warzone', label: 'Call of Duty Warzone'},
    { value: 'valorant', label: 'Valorant'},
    { value: 'rainbow-six-siege', label: 'Rainbow Six: Siege'},
    { value: 'smite', label: 'Smite'},
    { value: 'hearthstone', label: 'Hearthstone'},
    { value: 'fifa', label: 'Fifa'},
    { value: 'madden-nfl', label: 'Madden NFL'},
    { value: 'nba-2k', label: 'NBA 2K'}
  ]

const animatedComponents = makeAnimated();
const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
  


export default function AnimatedMulti(props) {
    const [gamesArr,setGamesArr] = useState([])


    //TODO delayed by one, state isnt updating immediately;(
    async function helper(e) {
        let value = Array.from(e, option => option.value);
        await setGamesArr(value);
        
        
    }
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={gameOptions}
      isFocused
      styles={colourStyles}
      label='What games do you play?'
      onChange={(e)=>/*props.games.push(e)*/helper(e)}
      games={gamesArr}
    />
  );
}