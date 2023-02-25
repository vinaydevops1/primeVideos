// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {eachItem} = props
  const {thumbnailUrl, videoUrl} = eachItem
  console.log(thumbnailUrl)

  return (
    <>
      <Popup
        modal
        trigger={
          <button type="button" className="button">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-size"
            />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="video-container">
              <button
                type="button"
                className="button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose size="35" />
              </button>
              <div className="player-wrap">
                <ReactPlayer url={videoUrl} className="video-player" />
              </div>
            </div>
          </>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
