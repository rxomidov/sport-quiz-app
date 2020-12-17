import React from 'react';
import mainImage from './main-img.jpg'
import { Link } from 'react-router-dom'

function Start(props) {
    return (
        <div className="start-page">
            <div className='content'>
                <img className="animated bounceInUp m" src={mainImage} alt="Sport Fans"/>
                <p className="animated bounceInLeft m" >O'zbek tiliga qiziqasizmi? <br/>O'zbek tiliga doir bilimlaringizni sinab ko'ring.
                    <br/> <strong>10ta Savol 3 Daqiqa Vaqt!</strong></p>
                <Link to="/quiz" className="animated bounceInRight start-button">Testni boshlash</Link>
            </div>
        </div>
    );
}

export default Start;