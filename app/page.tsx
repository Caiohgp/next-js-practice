'use client'

import { useState } from "react";
import Cards from "@/components/cards";

export default function Home() {
  const[numberOfCards,setNumberOfCards] = useState(3)
  const[names,setNames] = useState(['Caio é o papai','Luana é a mamãe','Davi é o neném'])
  const[isVisible,setIsVisible] = useState(true)
  const[textShown,setTextShown] = useState('Hello World')

  const handleClickVisibility = () => {
    setTextShown(textShown == 'Hello World' ? 'Bye World' : 'Hello World')
    setIsVisible(!isVisible)
  }

    const handleClickNumberOfCards = () => {
    setNumberOfCards(numberOfCards + 1)
    setNames([...names, 'Sou um programador melhor do que o papai'])

  }

  const cards = names.map((card,index) => <Cards key={index} children={card}/>)

  return (
    <div className="space-y-5">

      <p>{textShown}</p>
      {isVisible && cards}
      <div className="flex space-x-4">
        <button className="border p-2"  onClick={handleClickVisibility}>
          {isVisible ? 'Hide' : 'Show'}
        </button>

        <button className="border p-2 ml-4"  onClick={handleClickNumberOfCards}>
          Add Card
        </button>
      </div>
      

    </div>
    
  );
}
