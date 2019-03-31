import React from 'react'

const SvgComponents = {
  hexagon: `
    <svg width="1018px" height="817px" viewBox="0 0 1018 817">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M549.755653,-81.0764403 C589.761624,-55.8609528 844.959557,104.988544 872.667653,122.452765 C917.142571,150.485 917.142571,150.485 917.142571,201.52722 C917.142571,234.303097 917.142571,378.778035 917.142571,634.952036 C917.142571,664.804788 917.142571,664.804788 894.144183,679.385093 C813.453919,730.540357 756.837056,766.409676 724.293593,786.99305 C605.517889,862.117346 541.083473,902.517414 530.990345,908.193254 C509.053163,920.529561 509.053163,921.908785 485.844485,907.343329 C462.635807,892.777873 133.163523,685.656317 122.545251,678.294131 C106.092004,666.88626 101.144515,666.88626 101.112499,639.055807 C101.080482,611.225353 100.776612,182.169706 101.142571,170.449479 C101.70697,152.374022 101.142571,150.485 117.524382,140.159657 C133.906193,129.834315 443.534473,-65.3222537 469.137636,-81.4597506 C508.535461,-106.291928 509.749682,-106.291928 549.755653,-81.0764403 Z" id="Polygon" fill="#5C9EAD" transform="translate(509.053163, 408.910592) rotate(90.000000) translate(-509.053163, -408.910592) "></path>
      </g>
    </svg>
  `,
  logo: `
    <svg width="81px" height="37px" viewBox="0 0 81 37">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop" transform="translate(-205.000000, -27.000000)">
          <g id="Group-5" transform="translate(-540.000000, -170.000000)">
            <g id="Menu" transform="translate(744.000000, 195.000000)">
              <g id="Logo">
                <text id="Hive" font-family="OpenSans-Bold, Open Sans" font-size="18" font-weight="bold" fill="#000000">
                  <tspan x="0" y="27">Hive</tspan>
                </text>
                <g id="Group" transform="translate(43.000000, 0.000000)" fill="#F6BD60">
                  <polygon id="Polygon" transform="translate(10.500000, 10.402893) rotate(90.000000) translate(-10.500000, -10.402893) " points="10.5 0 18.7272413 5.20144628 18.7272413 15.6043388 10.5 20.8057851 2.27275866 15.6043388 2.27275866 5.20144628"></polygon>
                  <polygon id="Polygon" transform="translate(10.500000, 30.402893) rotate(90.000000) translate(-10.500000, -30.402893) " points="10.5 20 18.7272413 25.2014463 18.7272413 35.6043388 10.5 40.8057851 2.27275866 35.6043388 2.27275866 25.2014463"></polygon>
                  <polygon id="Polygon" transform="translate(28.402893, 20.402893) rotate(90.000000) translate(-28.402893, -20.402893) " points="28.4028926 9.90289256 36.6301339 15.1528926 36.6301339 25.6528926 28.4028926 30.9028926 20.1756512 25.6528926 20.1756512 15.1528926"></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `
}

function createMarkup(svgName) {
  return {__html: SvgComponents[svgName]};
}

const SvgMapping = (props) => {
  return (
    <div dangerouslySetInnerHTML={createMarkup(props.name)}></div>
  )
}

export default SvgMapping