// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmojiDetails, emojiClicked} = props
  const {id, emojiName, emojiUrl} = eachEmojiDetails

  const onClickEmoji = () => {
    emojiClicked(id)
  }
  return (
    <li className="each-emoji">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img alt={emojiName} className="emoji" src={emojiUrl} />
      </button>
    </li>
  )
}
export default EmojiCard
