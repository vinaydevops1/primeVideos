// Write your code her
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(eachItem => {
    if (eachItem.categoryId === 'ACTION') {
      return eachItem
    }
    return null
  })

  const comedyMovies = moviesList.filter(eachItem => {
    if (eachItem.categoryId === 'COMEDY') {
      return eachItem
    }
    return null
  })
  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-flex"
      />
      <div className="movies-container">
        <h1>Action Movies</h1>
        <div>
          <MoviesSlider key="action" moviesList={actionMovies} />
        </div>
        <h1>Comedy Movies</h1>
        <div>
          <MoviesSlider key="comedy" moviesList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
