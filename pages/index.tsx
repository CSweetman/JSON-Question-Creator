import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import RadioButton from '../components/RadioButtons'
import styles from '../styles/Home.module.css'

interface JsonQuestion {
  "creationData": string,
  "authorID": "955361",
  "reviewerID": "",
  "questionType": "multipleChoice",
  "questionTopic": string,
  "questionSubtopic:": string,
  "questionDifficulty": number,
  "question": string,
  "choices": string[],
  "answers": number[],
  "educationLinks": string[]
}

export enum Topic{
  React = "React",
  Angular = 'Angular',
}

export default function Home() {
  const date = new Date();

  const obj = {
    "creationData": date.toLocaleDateString('zh-Hans-CN'),
    "authorID": "955361",
    "reviewerID": "",
    "questionType": "multipleChoice",
  }

  const [topic, setTopic] = useState('')
  const [difficulty, setDifficulty] = useState(2)
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState(['', '', '', ''])
  const [correctAns, setCorrectAns ] = useState(0)
  const [references, setReferences] = useState<string[]>([])


  const handleOnAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let newArr = [...answers]
    newArr[index] = e.target.value
    setAnswers(newArr)
  }



  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>, topic: Topic) => {
    setTopic(topic)
  }

  return (
    <form className='grid grid-cols-2 md:gap-x-20 gap-y-[3.5rem] md:ml-[-20rem]'>
      <h1 className='text-center font-bold col-span-2 md:ml-[20rem]'>Question JSON Generator</h1>
      <label className='text-center md:text-right'>Topic</label>
      <div className='flex'>
        <RadioButton name='React' topic={Topic.React} handleRadioClick={handleRadioClick}></RadioButton>
        <div className='md:px-5'/>
        <RadioButton name='Angular' topic={Topic.Angular} handleRadioClick={handleRadioClick}></RadioButton>
      </div>
      <label className='text-center md:text-right'>Difficulty</label>
      <input type="range" min="1" max="3" className="range range-info range-sm md:w-[15vw] sm:w-[20vw]" onChange={(e) => setDifficulty(parseInt(e.target.value))} />
      <label className='text-center md:text-right'>Question</label>
      <textarea className="textarea textarea-info md:w-[15vw] sm:w-[20vw] h-10" placeholder="Question" onChange={(e) => setQuestion(e.target.value)}></textarea>
      <div className='flex flex-col text-center md:text-right gap-y-7'>
        {/* <div> <input type="radio" name="radio-10" className='radio translate-y-[.8vh] mr-3'></input><label>Answer 1</label></div> */}
        {[answers.map((x,i) =>
            <div key={i} > <input type="radio" name="radio-2" className='radio translate-y-[.8vh] mr-3 checked:bg-green-500' onClick={() => setCorrectAns(i)}></input><label>Answer {i+1}</label></div>
          )]}

      </div>
      <div className='flex flex-col gap-y-4'>
        {[answers.map((x,i) =>
             <input key={i} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs h-[5vh]" onChange={(e) => handleOnAnswerChange(e, i)} />
          )]}
      </div>
      <label className='text-center md:text-right'>References</label>
      <textarea className="textarea textarea-info md:w-[15vw] sm:w-[20vw] h-10" placeholder="Separate by ," onChange={(e) => setReferences(e.target.value.split(','))}></textarea>
      <div className="col-span-2 text-center md:pl-60">
        <input type='submit' className="btn btn-outline btn-info col sm:w-[10rem] md:w-[30rem]"/>
      </div>
    </form>
  )
}
