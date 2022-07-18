import { css } from '@emotion/react'

import Pretendard_ExtraBold_woff2 from '../assets/fonts/woff2/Pretendard_ExtraBold.woff2'
import Pretendard_Bold_woff2 from '../assets/fonts/woff2/Pretendard_Bold.woff2'
import Pretendard_Regular_woff2 from '../assets/fonts/woff2/Pretendard_Regular_woff2.woff2'
import Pretendard_Light_woff2 from '../assets/fonts/woff2/Pretendard_Light.woff2'

import Pretendard_ExtraBold_woff from '../assets/fonts/woff/Pretendard_ExtraBold.woff'
import Pretendard_Bold_woff from '../assets/fonts/woff/Pretendard_Bold.woff'
import Pretendard_Regular_woff from '../assets/fonts/woff/Pretendard_Regular_woff2.woff'
import Pretendard_Light_woff from '../assets/fonts/woff/Pretendard_Light.woff'

import Pretendard_ExtraBold_ttf from '../assets/fonts/ttf/Pretendard_ExtraBold.ttf'
import Pretendard_Bold_ttf from '../assets/fonts/ttf/Pretendard_Bold.ttf'
import Pretendard_Regular_ttf from '../assets/fonts/ttf/Pretendard_Regular_woff2.ttf'
import Pretendard_Light_ttf from '../assets/fonts/ttf/Pretendard_Light.ttf'

const GlobalFont = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'),
      url(${Pretendard_ExtraBold_woff2}) format('woff2'),
      url(${Pretendard_ExtraBold_woff}) format('woff'),
      url(${Pretendard_ExtraBold_ttf}) format('truetype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), url(${Pretendard_Bold_woff2}) format('woff2'),
      url(${Pretendard_Bold_woff}) format('woff'),
      url(${Pretendard_Bold_ttf}) format('truetype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'),
      url(${Pretendard_Regular_woff2}) format('woff2'),
      url(${Pretendard_Regular_woff}) format('woff'),
      url(${Pretendard_Regular_ttf}) format('truetype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'),
      url(${Pretendard_Light_woff2}) format('woff2'),
      url(${Pretendard_Light_woff}) format('woff'),
      url(${Pretendard_Light_ttf}) format('truetype');
  }
`

export default GlobalFont
