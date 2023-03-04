import CardBackground from '../images/bg-pattern-card.svg';
import UserThumbnail from '../images/image-victor.jpg';

function Card() {
    return(
        <div className="content">
            <div className="card-container">
                <img src={CardBackground} alt="" className="card-bg-pattern" />
                <div className="user-bio">
                    <img src={UserThumbnail} alt="" className="user-thumbnail" />
                    <div className="user-info">
                        <h3 className="user-name">victor crest<span>26</span></h3>
                        <p className="user-city">london</p>
                    </div>
                    <ul className="user-metrics">
                        <li className="item-metrics">
                            <h3>80K</h3>
                            <p>followers</p>
                        </li>
                        <li className="item-metrics">
                            <h3>803K</h3>
                            <p>likes</p>
                        </li>
                        <li className="item-metrics">
                            <h3>1.4K</h3>
                            <p>photos</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Card;