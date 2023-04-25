// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {toggleWinOrLoss, playAgainClicked, score} = props

  const onClickButton = () => {
    playAgainClicked()
  }
  return toggleWinOrLoss ? (
    <div className="win-or-loss-container">
      <img
        className="image"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      />
      <div className="result-container">
        <h1 className="heading">You Won</h1>
        <p className="score-type">Best Score</p>
        <p className="score">{score}/12</p>

        <button type="button" className="button" onClick={onClickButton}>
          Play Again
        </button>
      </div>
    </div>
  ) : (
    <div className="win-or-loss-container">
      <img
        className="image"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
      />
      <div className="result-container">
        <h1 className="heading">You Lose</h1>
        <p className="score-type">Score </p>
        <p className="score">{score}/12</p>

        <button type="button" className="button" onClick={onClickButton}>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLossCard
