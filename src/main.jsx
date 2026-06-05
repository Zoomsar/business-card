import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

// div
// img
// name + job title
// email + linkedin + github
// about info
// interests
// footer - copyright

root.render(
    <div className="card">
        <img src="../images/WTF.jpeg" alt="pfp"/>
        <div className="card-content">
        <header>
            <h1>Zoomsar Merilo</h1>
            <p id="job-title">Software Engineer</p>
            <div className="buttons">
                <button id="email">Email</button>
                <button id="linkedin">LinkedIn</button>
                <button id="github">GitHub</button>
            </div>
        </header>
        <h2>About</h2>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur bibendum.</p>
        <h2>Interests</h2>
        <p className="para">Coding, Traveling, Cooking</p>
        <footer>&copy; 2026 MF ZOOM</footer>
        </div>
    </div>
);