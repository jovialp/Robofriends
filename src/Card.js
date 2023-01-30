import React from 'react'
import LogRocket from 'logrocket';

const Card = ({ robot }) => {
    const { id, name, email, username } = robot;

    const touchRobot = () => {

        LogRocket.log(id, { id, username, timestamp: new Date(), action: "touched" });
    }
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5' onClick={touchRobot}>
            <img src={`https://robohash.org/${id}?200x200`} alt='robot' />
            <div>
                <h2>{name || "name"}</h2>
                <p>{email || "email"}</p>
            </div>
        </div>
    )
}

export default Card