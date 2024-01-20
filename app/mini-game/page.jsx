/* page.jsx / Memory game by Tay King Yu, Galen*/
"use client";
import styles from './page.module.css';
import fonts from "../ui/fonts.css"
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Card from './card/card';
import { useLocalStorage } from './useLocalStorage';


const { getItem, setItem } = useLocalStorage('turns')

const cardImages = [
    {"src" : "/media/card-face-1.webp", matched: false},
    {"src" : "/media/card-face-2.webp", matched: false},
    {"src" : "/media/card-face-3.webp", matched: false},
    {"src" : "/media/card-face-4.webp", matched: false},
    {"src" : "/media/card-face-5.webp", matched: false},
    {"src" : "/media/card-face-6.webp", matched: false},
]




export default function MemoryGame(){
    
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    

    /* Start game automatically  */
    useEffect(() => {
        shuffleCards();
        setTurns(getItem());
    }, []);
    
    //Shuffle
    const shuffleCards = () => {
        const shuffledCards =  [...cardImages, ...cardImages] //Spread card images twice, bringing total number of cards to 2*6
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        /*In case theer are cards selected before turns reset*/ 
        setChoiceOne(null); 
        setChoiceTwo(null); 
        setCards(shuffledCards)
        setTurns(0); 
    }

    

    /* handle choice */ 
    const handleChoice = (card) => {
        /* console.log(card) */
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card); /* null = false, not null = true */
    }

    /* Compare 2 selected cards */
    useEffect(() => {
        if(choiceOne && choiceTwo){
            setDisabled(true) /* Disable selection of other cards during the process of comparison */
            /* Compare image links */
            if (choiceOne.src === choiceTwo.src){
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src) {
                            return {...card, matched: true} /* Change matched property to true if cards are matched in new array*/
                        } else {
                            return card;
                        }
                    })
                })
               resetTurn() /* Increment turn by 1 */
            }
        else {
            setTimeout(() => resetTurn(), 1000) /*Pause for a split moment, so that users can see card before it is unflipped, then increment turn by 1 */ 
        }
            console.log(turns);
        }
    }, [choiceOne, choiceTwo])

    /* reset after 2 cards selected, and increase number of turns */
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
        setTurns((prevTurns) => {
            const newTurns = prevTurns + 1;
            setItem(newTurns); // Set item in local storage
            return newTurns; // Update the state
        })
    };
     
    
    
    
    return(
    <>
        <div className={styles.body}>
            <div>
                <h1 className="pt-3">Brawl Match</h1>
                <Button onClick={ () => {shuffleCards(); setItem(0);}} className={`${styles.newGameBtn}`}>New Game</Button>               
                <p className='text-primary pt-2'>Turn: {turns} </p>              
                <div className={styles.playArea}>
                    <div className={`${styles.cardGrid} ${styles.playArea}`}>
                        {cards.map(card => (
                            <Card 
                                card={card}
                                handleChoice={handleChoice}
                                flipped={card === choiceOne || card === choiceTwo || card.matched}
                                disabled={disabled}
                            />                 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}