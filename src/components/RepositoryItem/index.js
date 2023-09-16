// Write your code here
import './index.css'

const CardItem = props => {
  const {Cards} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = Cards

  return (
    <li className="li1">
      <img src={avatarUrl} alt={name} className="cimg" />
      <div>
        <h1 className="col">{name}</h1>

        <div className="row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default CardItem
