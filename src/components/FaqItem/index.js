import {Component} from 'react'
import './index.css'

class EachFaq extends Component {
  state = {isBtnClicked: false}
  onClickToGetId = () => {
    const {eachItem, passIdFuntion} = this.props
    const {id, questionText, answerText} = eachItem
    this.setState(prevState => ({isBtnClicked: !prevState.isBtnClicked}))
  }
  render() {
    const {eachItem} = this.props
    const {id, questionText, answerText} = eachItem
    const {isBtnClicked} = this.state
    const imgUrl = isBtnClicked ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png" 
    const altText = isBtnClicked ? "minus" : "plus" 
    return (
      <li className="each-list-css">
        <div className="list-question-part">
          <h1 className="list-head">{questionText}</h1>
          <button type="button" onClick={this.onClickToGetId} className="btn">
            <img alt={altText} src={imgUrl} />
          </button>
        </div>
        {
          isBtnClicked && (
            <div>
              <hr className="hr" />
              <p className="answer">{answerText}</p>
            </div>
          )
        }

        
      </li>
    )
  }
}

export default EachFaq
