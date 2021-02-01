import React from 'react';
import avatar from '../img/avatar.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={avatar} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> André</span></h4>
                <p className="about-text">
                    A Junior Frontend Developer looking for new challenges, also have a passion for gaming, music and anime. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: André Almeida</p>
                        <p>: 24</p>
                        <p>: Portuguese</p>
                        <p>: Portuguese, English, Spanish</p>
                        <p>: Portugal</p>
                    </div>
                </div>
                <button className="btn">
                <a href="/resume.pdf"  download> Download CV</a>
                </button> 
            </div>
        </div>
    )
}

export default ImageSection;



