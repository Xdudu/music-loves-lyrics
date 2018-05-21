import React from 'react'

import styles from './index.css'


export default class Welcome extends React.Component {
  state = {
    showMusicUploadArea: false,
    showLyricsUploadArea: false,
  }

  showMusicUploadArea = () => this.setState({ showMusicUploadArea: true })
  hideMusicUploadArea = () => this.setState({ showMusicUploadArea: false })

  showLyricsUploadArea = () => this.setState({ showLyricsUploadArea: true })
  hideLyricsUploadArea = () => this.setState({ showLyricsUploadArea: false })

  render() {
    const { showMusicUploadArea, showLyricsUploadArea } = this.state

    return (
      <div styleName="welcome">
        <section styleName="music-section">
          <header>MUSIC</header>

          <div styleName={`upload-wrapper ${showMusicUploadArea ? 'side-b' : 'side-a'}`}
            onMouseEnter={this.showMusicUploadArea}
            onMouseLeave={this.hideMusicUploadArea}>
            <div styleName="upload-icon-wrapper">
              <MusicUploadIcon />
            </div>

            <div styleName="upload-area">
              <div styleName="music-upload-btn">
                上传
                <input type="file" />
              </div>
            </div>
          </div>
        </section>

        <section styleName="lyrics-section">
          <header>LYRICS</header>

          <div styleName={`upload-wrapper ${showLyricsUploadArea ? 'side-b' : 'side-a'}`}
            onMouseEnter={this.showLyricsUploadArea}
            onMouseLeave={this.hideLyricsUploadArea}>
            <div styleName="upload-icon-wrapper">
              <LyricsUploadIcon />
            </div>

            <div styleName="upload-area">
              <div styleName="lyrics-upload-btn">
                上传
                <input type="file" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}


const MusicUploadIcon = () => <svg width="124px" height="47px" viewBox="0 0 124 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g transform="translate(-258.000000, -296.000000)" stroke="#60897E" strokeWidth="10">
      <polyline points="262 332.235746 280.752214 313.483533 291.975238 324.706557 312.681795 304 344.634477 335.952682 363.732208 316.854951 377.585938 332.235746"></polyline>
    </g>
  </g>
</svg>

const LyricsUploadIcon = () => <svg width="74px" height="45px" viewBox="0 0 74 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g transform="translate(-924.000000, -297.000000)" stroke="#D3D7BE">
      <g transform="translate(924.000000, 301.000000)">
        <path d="M0,1 L73.460979,1" strokeWidth="10"></path>
        <path d="M0,19 L48.0623298,19" strokeWidth="6"></path>
        <path d="M0,37 L62.1935486,37" strokeWidth="8"></path>
      </g>
    </g>
  </g>
</svg>
