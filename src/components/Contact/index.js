import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Contact = () => {
  const [letterClass] = useState('text-animate')


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            If you have any further question,
            don't hesitate to contact me using below form either.
          </p>
          <p>
          <FontAwesomeIcon icon={faContactBook} />  : Dhruvkumarpatel07@gmail.com
          </p>
          <p>
          <FontAwesomeIcon icon={faContactBook}/>  : +1 (343) 297 8070
          </p>  
        </div>
      </div>  
      <Loader type="pacman" />
    </>
  )
}

export default Contact