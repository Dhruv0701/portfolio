import {useState} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {faPython,faCss3,faGit,faHtml5,faJsSquare,faReact} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass] = useState('text-animate')

  return (
    <>
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
            I completed my diploma at Algonquin College, 
            where I developed practical working knowledge of hardware and software 
            through teamwork, projects, and practical exercises.
          </p>
          <p>
            I am a dedicated Computer Programmer with proven skills and abiliies in the field of Computer Science
            and have profound knowledge about programming language. I consider myself to be result oriented, dependable,
            and capable worker who is not affected by job stress and will be strong asset for any team. 
            I am enthusiastic to learn more.
          </p>
          <p>
            I am looking for an oppurtunity to implement and expand my technical skills 
            and build a strong work ethic and network.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About