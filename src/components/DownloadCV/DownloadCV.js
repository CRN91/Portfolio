import './DownloadCV.css'
import download from './download.svg'

const DownloadCV = () => (
    <section className="download-cv">
      <h2 className="download-cv-title">Check out my CV</h2>
      <a href={`${process.env.PUBLIC_URL}/AdamKaizraCV.pdf`} download className="download-cv-link">Download <img src={download} height="20"alt="" className="download-icon" /></a>
    </section>
  );
  
  export default DownloadCV;
