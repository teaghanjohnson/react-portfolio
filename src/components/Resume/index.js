import './index.scss'
import resumePDF from '../../assets/images/Teaghan Johnson Final Resume.pdf'

const Resume = () => {
  return (
    <div className="container resume-page">
      <iframe src={resumePDF} title="Resume" />
    </div>
  )
}

export default Resume
