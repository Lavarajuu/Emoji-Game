// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, toggleImage} = props

  return (
    <nav className="nav-container">
      <div className="logo-name-container">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      {toggleImage && (
        <div className="scores-container">
          <p className="scores">Score: {score}</p>
          <p className="scores">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
