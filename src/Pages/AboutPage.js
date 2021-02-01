import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'50%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'50%'} width={'60%'} />
                
            </div>
        </div>
    )
}

export default AboutPage;
