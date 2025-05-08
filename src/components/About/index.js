import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])


  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a very ambitious aspiring full stack developer looking for any front end, back
          end or full stack positions with the opppurtunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quitely confident, naturally curious, and perpetually working on improving
          my skills onde design problem at a time,
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className='face1'>
            <FontAwesomeIcon icon={faPython} color="#efd81d" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default About