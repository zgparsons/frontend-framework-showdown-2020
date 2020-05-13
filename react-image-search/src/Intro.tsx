import React from 'react';

const Intro = () => {
    return (
        <div className="intro">
            <h1>React Image Search ⚛</h1>
            <p>This is a project made by <a href="https://zacharyparsons.co.uk">Zachary</a> while watching a <a href="https://www.twitch.tv/codinggarden">Coding Garden live stream</a>.</p>
            <p>The purpose of this project is to create an image search SPA using different frontend frameworks to compare them.</p>
            <ol>
                <li>React Image Search - You're here now! <span role="img">📍</span></li>
                <li><a href="https://vanilla-image-search-z.now.sh/">Vanilla Image Search</a></li>
                <li>Vue... todo</li>
                <li><a href="https://angular-image-search-z.now.sh">Angular Image Search</a></li>
            </ol>
        </div>
    )
}

export default Intro;