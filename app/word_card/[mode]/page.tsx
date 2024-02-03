import { useEffect } from "react";
import { englishData } from "../../data/english";
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import WordCardCommponent from "./wordCardCommponent";
// import { useSearchParams } from "next/dist/client/components/navigation";

export const generateStaticParams = async () => {
  const modes = ["first", "second", "therd", "force" ]

  return modes.map((mode) => ({
    mode: mode,
  }));
};

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
  return(
    <WordCardCommponent />
  );
}