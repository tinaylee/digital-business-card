import React from "react"

export default function Info() {
    return (
        <div>
            <img src="./src/assets/tina-small.jpeg" className="headshot"/>
            <div className="info-container">
                <h3 className="name">Tina Lee</h3>
                <h4 className="job">Junior Developer</h4>
                <p className="website">www.idonthaveawebsite.com</p>
                <button className="email-button">
                    <img src="./src/assets/mail-fill.png"/>
                    Email
                </button>
            </div>
        </div>
    )
}