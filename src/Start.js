import React from 'react';
import mainImage from './main-img.png'
import { Link } from 'react-router-dom'

function Start(props) {
    return (
        <div className="start-page">
            <div className='content'>
                <img className="animated bounceInUp" src={mainImage} alt="Sport Fans"/>
                <p className="animated bounceInLeft" >Sportga qiziqasizmi? <br/>Sportga oid bilimlaringizni sinab ko'ring.
                    <br/> <strong>10ta Savol 60 Soniya Vaqt!</strong></p>
                <Link to="/quiz" className="animated bounceInRight start-button">Testni boshlash</Link>
            </div>
        </div>
    );
}

export default Start;