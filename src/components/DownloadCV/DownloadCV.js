import './DownloadCV.css'
import download from './download.svg'

const DownloadCV = () => (
    <section className="download-cv">
      <h2>Check out my CV</h2>
      <a href="./AdamKaizraCV.pdf" download className="download-cv-link">Download</a>
    </section>
  );
  
  export default DownloadCV;
  