import jss from 'jss'
import preset from 'jss-preset-default'
import {cssConstants} from './common/cssConstants';

jss.setup(preset());

const sheet = jss.createStyleSheet({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Proxima',
        src: 'url("'+require("../assets/fonts/ProximaNova-Regular.ttf")+'")',
        fontWeight: 'normal',
        fontStyle: 'normal'
      },
      {
        fontFamily: 'Proxima',
        src: 'url("'+require("../assets/fonts/ProximaNova-Bold.ttf")+'")',
        fontWeight: 'bold',
        fontStyle: 'normal'
      },
      {
        fontFamily: 'Proxima',
        src: 'url("'+require("../assets/fonts/ProximaNova-Semibold.ttf")+'")',
        fontWeight: 'lighter',
        fontStyle: 'normal'
      }
    ],
    '*': {
      boxSizing: 'border-box',
      outline: 'none !important'
    },
    body: {
      margin: '0',
      fontFamily: 'Proxima',
      fontWeight: 'normal'
    }
  }
})

export default sheet;
