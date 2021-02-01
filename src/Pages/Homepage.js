import React from 'react';
import { SocialIcon } from 'react-social-icons';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Welcome to my 
                    <span> Portfolio.</span>
                </h1>
                <div className="icons">
                    <SocialIcon url="https://www.linkedin.com/in/andréd-almeida/" className="icon-holder" />
                    <SocialIcon url="https://github.com/sawnick?tab=repositories" className="icon-holder"/>
                    <SocialIcon url="https://www.youtube.com/channel/UCyV1De-zdwlG7u5ZzOItqvA" className="icon-holder"/>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
