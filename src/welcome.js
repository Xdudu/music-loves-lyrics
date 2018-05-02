import React from 'react'
import { render } from 'react-dom'

import styles from './welcome.css'


export default class Welcome extends React.Component {
  render() {
    return (
      <div className={styles['welcome']}>
        <section className="music-section">
          <header>MUSIC</header>
          <svg width="124px" height="47px" viewBox="0 0 124 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Artboard" transform="translate(-258.000000, -296.000000)" stroke="#60897E" strokeWidth="10">
                <polyline id="Path-3" points="262 332.235746 280.752214 313.483533 291.975238 324.706557 312.681795 304 344.634477 335.952682 363.732208 316.854951 377.585938 332.235746"></polyline>
              </g>
            </g>
          </svg>

        </section>

        <section className="lyrics-section">
          <header>LYRICS</header>
          <svg width="74px" height="45px" viewBox="0 0 74 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Artboard" transform="translate(-924.000000, -297.000000)" stroke="#D3D7BE">
                <g id="Group" transform="translate(924.000000, 301.000000)">
                  <path d="M0,1 L73.460979,1" id="Path-2" strokeWidth="10"></path>
                  <path d="M0,19 L48.0623298,19" id="Path-4" strokeWidth="6"></path>
                  <path d="M0,37 L62.1935486,37" id="Path-5" strokeWidth="8"></path>
                </g>
              </g>
            </g>
          </svg>
        </section>
      </div>
    )
  }
}
