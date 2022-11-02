import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
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






  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>, topic: Topic) => {
    console.log(topic)
    setTopic(topic)
  }

  return (
    <div className={styles.container}>
      <div className="form-control">
        <div className='flex justify-center gap-3'>
          <RadioButton name='React' topic={Topic.React} handleRadioClick={handleRadioClick}></RadioButton>
          <div className='px-10'/>
          <RadioButton name='Angular' topic={Topic.Angular} handleRadioClick={handleRadioClick}></RadioButton>
        </div>
      </div>
    </div>
  )
}
