import React from 'react'
import image from '../assets/headerpics.webp'
import './Welcome.css'

function Welcome() {
    return (
        <div className='welcome'>
            <div className="welcomeImage">
                <img src={image} alt="" />
            </div>
            <div className="welcomeParagraphe">
                <h4><span className="underline">We</span>lcome to Espe<span className='esperanciaSpan'>rancia</span></h4>

                <p>We are confident to confirm that all members in Charixy are professionals in the charity.It means that human resources experience in the field with consultant, organization events for needy.</p>

                <p>Our long – term working experience effectively brings us achievement.Our mission is to provide the great result for clients on time. Especially, if they have any questions relating the Charixy, please send us & we will try our best to deal with issues.</p>

                <button className='moreAboutUs'>More About Us</button>
            </div>
        </div>
    )
}

export default Welcome