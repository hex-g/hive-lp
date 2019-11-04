import styled from 'styled-components'

export const HexagonHolder = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: 1000px;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: -1;
`

export const HexagonPositioner = styled.div`
    position: relative;
    min-width: 1350px;
    height: 100%;
    z-index: -1;
`

export const HexagonWrapper = styled.div`
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
    position: absolute;
    top: 0;
    z-index: -1;
`

export const HexagonAligner = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    opacity: ${({ transparent }) => transparent ? ".1" : "1"};
    transform: scale(.8);
    
    @media (min-width: 900px) {
        transform: 
        ${({ show, side }) => {
            
            const alignSide = (side === "left" ? -1 : 1)
            let xConstraints = 0

            switch(show){
                case "half":
                    xConstraints = 45
                    break;

                case "third":
                    xConstraints = 31
                    break;

                default:
                    xConstraints = 0
                    break;
            }
            
            const constraints = xConstraints * alignSide
            return "translateX("+constraints+"%)"
        }};
    }

    
`