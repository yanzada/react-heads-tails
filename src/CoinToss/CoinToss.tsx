import React, { useEffect, useRef, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { Container, 
        ContainerCoin, 
        SideHeads,
        SideTails,
        CssBlackout,
        ImageWinner,
        ClosedButton,
        Subtitle,
    } from "./CoinToss_ui";

import Cara from '../assets/cara.png';
import Coroa from '../assets/coroa.png';


interface CustomCoinToss {
    image: string;
    name: string;
  }
  

interface Props {
    headsWinner?: boolean | 'rand';
    blackout?:boolean;
    closeAutomatically?:boolean;
    duration?: 'slow' | 'normal' | 'fast';
    customCoinToss?: CustomCoinToss[],
  }


  function setHeadsWinner(headsWinner: boolean | 'rand'): boolean {
    if (headsWinner === 'rand') {
    return Math.random() >= 0.5;
    
    } else {
      return headsWinner;
    }
  }

 

  function setDuration(duration: 'slow' | 'normal' | 'fast'): number {
    switch (duration) {
      case 'slow':
        return 3;
      case 'normal':
        return 2;
      case 'fast':
        return 1;
      default:
        return 2;
    }
  }

 
  const setDefaultCoinToss = () => {
    return [{
    image: Cara,
    name: 'Cara',
    },
    {
    image: Coroa,
    name: 'Coroa',
    }
    ];
    }

  

const CoinToss: React.FC<Props> = ({
    headsWinner = 'rand', 
    duration = 'normal',
    blackout = false,
    closeAutomatically = true,
    customCoinToss = setDefaultCoinToss(),
    }) => {
    
    const winnerCoinToss = setHeadsWinner(headsWinner);
    const numberDuration = setDuration(duration);
    const [pageBlackout, setPageBlackout] = useState(blackout);
    const [winner, setWinner] = useState<string>();
    const [hidden, setHidden] = useState<boolean>();
    const countCoinSpinn = useRef<number>(0);
    const [containerCoin, setContainerCoin] = useState<JSX.Element>();


    


    const afterSomeoneWins = () => {
        
        countCoinSpinn.current++;

        //atualiza o vencedor na tela
        setTimeout(() => {
           
            winnerCoinToss ? setWinner(customCoinToss[0].name) :  setWinner(customCoinToss[1].name);
        }, numberDuration * 1000 );
        
        
        let timeToUpdate = (numberDuration + 5) * 1000;
       
        
        //tira o blackout
        setTimeout(() => {
            !blackout ? setPageBlackout(false) : '';
            closeAutomatically ? setHidden(closeAutomatically) : '';
        }, timeToUpdate);
    }


      
      const handleCloseAnimationCoin = () => {
            setHidden(true);
      }


      useEffect(() => {

        afterSomeoneWins();
        setTimeout(() => {
            setContainerCoin(
                <ContainerCoin
                    headsWinner={winnerCoinToss}
                    duration={numberDuration}
                >
                    <SideHeads 
                        backgroundImage={customCoinToss[0].image} 
                        headsWinner={winnerCoinToss} 
                    />
                    
                    <SideTails 
                        backgroundImage={customCoinToss[1].image} 
                        headsWinner={winnerCoinToss} 
                    />
                </ContainerCoin>
            );
        }, 100);
       
    }, []);



    return (
      
        <>
        {!hidden &&  (
            
      <Container> 
            {pageBlackout && <CssBlackout /> }

            <ClosedButton>
                <IoIosCloseCircle 
                    onClick={handleCloseAnimationCoin} 
                    style={{width: '30px', height:'30px', color: pageBlackout ? '#fff' : 'red'}}
                />
            </ClosedButton>
           
            <div>
          
               {containerCoin}
              
                <Subtitle needChangeColor={pageBlackout}> {winner} </Subtitle>
            </div>
               
              
        </Container>       
        
    )}
  
    </>
    )

}



export default CoinToss;