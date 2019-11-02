import React from 'react'
import SvgMapping from '../SvgMapping'

import { HexagonWrapper, HexagonAligner, HexagonHolder, HexagonPositioner } from './BackHexagon.style'

export default ({ side = "right", show="half", transparent=false, scale='1' }) => {
  return (
    <HexagonHolder>
      <HexagonPositioner>
        <HexagonWrapper>
          <HexagonAligner side={side} show={show} transparent={transparent}>
            <SvgMapping name="hexagon" scale={scale}/>
          }
          </HexagonAligner>
        </HexagonWrapper>
      </HexagonPositioner>
    </HexagonHolder>
  )
}