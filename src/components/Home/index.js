import {useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s1.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['h','r','u','v','','P','a','t','e','l']
    const nameJob = ['A','s','p','i','r','i','n','g','','D','e','v','e','l','o','p','e','r']
    
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>ello</span>
                <br/>
                <span className={`${letterClass} _13`}>I am</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameJob}
                idx={14}/>
                </h1>            
                <Link to="contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
};

export default Home