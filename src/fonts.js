import jss from 'jss'
import preset from 'jss-preset-default'
import { colors, variables } from 'constants'

jss.setup(preset());

const sheet = jss.createStyleSheet({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Proxima',
        src: 'url("'+require("fonts/ProximaNova-Regular.ttf")+'")',
        fontWeight: 'normal',
        fontStyle: 'normal'
      },
      {
        fontFamily: 'Proxima',
        src: 'url("'+require("fonts/ProximaNova-Bold.ttf")+'")',
        fontWeight: 'bold',
        fontStyle: 'normal'
      },
      {
        fontFamily: 'Proxima',
        src: 'url("'+require("fonts/ProximaNova-Semibold.ttf")+'")',
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
      fontWeight: 'normal',
      background: colors.background
    }
  }
})

export default sheet;
