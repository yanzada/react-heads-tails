import styled, { css, keyframes } from "styled-components";

console.log('entreu no styled?');

interface Props {
    headsWinner: boolean;
    duration: number;
}

interface PropsSide {
    backgroundImage: string;
    headsWinner?: boolean;
}

interface PropsSubtitle {
    needChangeColor: boolean;
}



  const Tails = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(1620deg);
    }
`;

const Heads = keyframes`
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(1800deg);
    }
  `;


  export const CssBlackout = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

export const ClosedButton = styled.div`
  position: absolute;  
  top: 10px; 
  right: 10px;
  z-index:999;
  width:fit-content;
  cursor:pointer;
`;

 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    top: 0;
    z-index:999;
`;


export const ContainerCoin = styled.div<Props>`
    position: relative;
    margin: 0 auto;
    width: 150px;
    height: 150px;
    transition: -webkit-transform 1s ease-in;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    z-index:9999;
    
    ${(props) => css`
    animation: ${props.headsWinner ? Heads : Tails} ${props.duration}s ${!props.headsWinner ? 'ease-out forwards' : 'linear'};
    -webkit-animation: ${props.headsWinner ? Heads : Tails} ${props.duration}s ${!props.headsWinner ? 'ease-out forwards' : 'linear'};
    -moz-animation: ${props.headsWinner ? Heads : Tails} ${props.duration}s ${!props.headsWinner ? 'ease-out forwards' : 'linear'};
    -o-animation: ${props.headsWinner ? Heads : Tails} ${props.duration}s ${!props.headsWinner ? 'ease-out forwards' : 'linear'};
  `}


   
    
 
    div {
        width: 100%;
        height: 100%;
        z-index:9999;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -webkit-box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.3),
          0 12px 20px -10px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.3),
          0 12px 20px -10px rgba(0, 0, 0, 0.4);
        box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.3),
          0 12px 20px -10px rgba(0, 0, 0, 0.4);
      
       
          background-color: #3e3e3e;
          color: white;
          text-align: center;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: bottom;
          background-size: cover;

            width: 100%;
            height: 100%;
            border: 2px solid black;
            border-radius: 50%;
            backface-visibility: hidden;
            background-size: contain;
            position: absolute;

        
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
      
`;


export const SideHeads = styled.div<PropsSide>`
    background-image: url(${(props) => props.backgroundImage});
    
   
    
`;

export const SideTails = styled.div<PropsSide>`
    background-image: url(${(props) => props.backgroundImage});
    transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
   
   
`;


export const ImageWinner = styled.div<PropsSide>`

background-image: url(${(props) => props.backgroundImage});
      
`;  



// Create the keyframes
const fadeIn = keyframes`
  0%   {opacity: 0}
  25% {opacity: 0}
  50%  {opacity: 0}
  100% {opacity: 1}
`;

export const Subtitle = styled.div<PropsSubtitle>`
    animation: ${fadeIn} 4s linear 1;
    font-size: 1.2rem;
    text-transform: uppercase;
    position: relative;
    z-index: 9999;
    margin-top:20px;
    color: ${(props) => props.needChangeColor ? '#fff' : '#000'}
`;

