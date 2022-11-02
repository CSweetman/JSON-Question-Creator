import React from 'react'
import { Topic } from '../pages'

interface RadioInterface {
    name: string,
    topic: Topic, 
    handleRadioClick: (e: React.ChangeEvent<HTMLInputElement>, topic: Topic) => void
}

const RadioButton = ({name, topic, handleRadioClick} : RadioInterface) => {
  return (
    <>
        <span className="label-text">{name}</span> 
        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onChange={(e) => handleRadioClick(e, topic)}  />
    </>
  )
}

export default RadioButton