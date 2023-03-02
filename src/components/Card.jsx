import CardBackground from '../images/bg-pattern-card.svg';
import UserThumbnail from '../images/image-victor.jpg';

function Card() {
    return(
        <div className="card-container">
            <img src={CardBackground} alt="" className="profile-background" />
            <img src={UserThumbnail} alt="" className="user-thumbnail" />
            <div className="user-bio">
                <h2>victor crest<span>26</span></h2>
                <p>london</p>
            </div>
            <ul className="user-metrics">
                <li className="metric-item followers">
                    <h3>80K</h3>
                    <p>followers</p>
                </li>
                <li className="metric-item likes">
                    <h3>803K</h3>
                    <p>likes</p>
                </li>
                <li className="metric-item photos">
                    <h3>1.4K</h3>
                    <p>photos</p>
                </li>
            </ul>
        </div>
    )
}

export default Card;