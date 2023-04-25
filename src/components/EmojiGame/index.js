/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojiIds: [],
    toggleWinOrLoss: false,
    toggleImage: true,
  }

  emojiClicked = id => {
    const {emojiIds, topScore} = this.state

    if (emojiIds.includes(id)) {
      this.setState({toggleImage: false, toggleWinOrLoss: false})
      if (topScore < emojiIds.length) {
        this.setState({topScore: emojiIds.length})
      } else {
        this.setState(prevState => ({
          topScore: prevState.topScore,
        }))
      }
    } else {
      if (emojiIds.length === 11) {
        this.setState({toggleImage: false, toggleWinOrLoss: true, topScore: 12})
      }
      this.setState(prevState => ({
        emojiIds: [...prevState.emojiIds, id],
        score: prevState.score + 1,
      }))
    }
  }

  playAgainClicked = () => {
    this.setState({score: 0, toggleImage: true, emojiIds: []})
  }

  render() {
    const {emojisList} = this.props
    emojisList.sort(() => Math.random() - 0.5)

    const {score, topScore, toggleWinOrLoss, toggleImage} = this.state

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} toggleImage={toggleImage} />
        {toggleImage ? (
          <ul className="emojis-container">
            {emojisList.map(eachEmojiDetails => (
              <EmojiCard
                key={eachEmojiDetails.id}
                eachEmojiDetails={eachEmojiDetails}
                emojiClicked={this.emojiClicked}
              />
            ))}
          </ul>
        ) : (
          <WinOrLossCard
            score={score}
            toggleWinOrLoss={toggleWinOrLoss}
            playAgainClicked={this.playAgainClicked}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
