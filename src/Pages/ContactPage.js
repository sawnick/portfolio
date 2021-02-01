import React from 'react'
import ContactItem from '../Components/ContactItem';
import email from '../img/emailme.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="contact-sect">
                    <ContactItem icon={email} text1={'andralmeida3@gmail.com'}  title={'Email'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;


