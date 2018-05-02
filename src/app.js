import React from 'react'
import { render } from 'react-dom'

import Welcome from './welcome.js'

import styles from './index.css'


class App extends React.Component {
  render() {
    return (
      <div id="app" style={{ height: '100%' }}>
        {
          true && <Welcome />
        }
      </div>
    )
  }
}


render(<App />, document.getElementById('root'))
