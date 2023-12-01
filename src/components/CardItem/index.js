// Write your code here.
import './index.css'
const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
      <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
