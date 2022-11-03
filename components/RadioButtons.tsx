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
        <span className="pr-3">{name}</span> 
        <input type="radio" name="radio-1" className={`radio ${topic === 'React' ? 'checked:bg-blue-500' : 'checked:bg-red-500'}`} onChange={(e) => handleRadioClick(e, topic)}  />
    </>
  )
}

export default RadioButton