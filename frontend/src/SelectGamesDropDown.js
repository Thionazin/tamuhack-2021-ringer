import React, {useState} from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js'
import {setGameList} from './RegisterPage'


//TODO Perhaps import list of games from like steam or some API


const gameOptions = [
    { value: 'counter-strike', label: 'Counter Strike' },
    { value: 'destiny', label: 'Destiny' },
    { value: 'destiny 2', label: 'Destiny 2' }
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