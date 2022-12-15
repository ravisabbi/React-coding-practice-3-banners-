// Write your code here.
import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} banner-card-item`}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button type="button" className="show-more-btn">
        Show More
      </button>
    </li>
  )
}

export default Banner
