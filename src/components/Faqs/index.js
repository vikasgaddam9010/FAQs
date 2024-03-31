import {Component} from 'react'
import EachFaq from '../FaqItem'
import './index.css'

class Faqs extends Component {
  passIdFuntion = id => {
    console.log(id)
  }
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <ul className="list-container">
          <h1 className="head">FAQs</h1>
          {faqsList.map(eachItem => (
            <EachFaq
              key={eachItem.id}
              eachItem={eachItem}
              passIdFuntion={this.passIdFuntion}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Faqs
