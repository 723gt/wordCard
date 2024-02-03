"use client"
import { useEffect } from "react";
import { englishData } from "../../data/english";
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

type Mode = "first" | "second" | "therd" | "force" 
type EnglishDataFormt = {
  en: string;
  jp: string;
}

type Params = {
  mode: Mode
}

type Props = {
  params: Params
}

export default function WordCard(props: Props){
  const [data, setData] = useState<Array<EnglishDataFormt>>([{"en": "start", "jp": "スタート"}]);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isEnglish, setIsEnglish] = useState<boolean>(true)
  const moveWordIndex = (movement: number) => {
    const newIndex = wordIndex + movement;
    const lastIndex = data.length - 1;
    setIsEnglish(true);
    if(newIndex < 0){
      setWordIndex(lastIndex);
    } else if(newIndex > lastIndex){
      setWordIndex(0);
    } else{
      setWordIndex(newIndex);
    }
  } 
  useEffect(() => {
    switch(props.params.mode){
      case "first":
        setData(englishData.slice(0, 183))
        break;
      case "second":
        setData(englishData.slice(183, 366))
        break;
      case "therd":
        setData(englishData.slice(366, 549))
        break;
      case "force":
        setData(englishData.slice(549, 733))
        break;
      default:
        setData(englishData.slice(0, 183))
    }
  }, []);
  return (
    <>
      <div className="w-100 h-20 text-center">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsEnglish(!isEnglish)}>
            <div>{wordIndex + 1}</div>
            {isEnglish? (<div>{data[wordIndex].en}</div>): (<div>{data[wordIndex].jp}</div>)}
          </button>
        </div>
        <div className="my-10">
          <div>
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => moveWordIndex(-1)}>
             <FontAwesomeIcon icon={faArrowLeft} />
           </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => moveWordIndex(1)}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
            <Link href={'/'} >
              Home
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}