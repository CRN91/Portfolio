import './About.css'
import DownloadCV from '../DownloadCV/DownloadCV'

const About = () => {
    return (
        <>
        <p className="intro-text">Hi, my name is...</p>
        <h1 className="name-title">Adam Kaizra</h1>
        <p className="course-text">MSci Computer Science</p>
        <p className="specialization-text">I am a software engineer currently studying robotics, simulation, computer vision and machine learning. Previous topics I have studied include network science, data analysis and optimisation.</p>
        <div style={{left: '25%', position: 'relative'}}>
            <DownloadCV />
        </div>
        </>
    );
}

export default About;

