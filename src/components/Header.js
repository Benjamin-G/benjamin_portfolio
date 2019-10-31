import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import portfolio from '../images/portfolio.pdf'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <a title="Benjamin Geyer - Resume PDF" href={portfolio}><span className="icon fa-file-pdf-o"></span></a>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Benjamin Geyer</h1>
                <p>
                  <h4>About Me</h4>
                  I am motivated software engineer from Pittsburgh, PA  currently living in beautiful San Diego, CA. I love the web platform and interesting use cases of CS concepts. Functional programming, data engineering and modern web development are some of my favorite topics.
                  <br/>
                  <p></p>
                  <h4>Connect with me on Linkedin</h4>
                  <a title="Benjamin Geyer - Linkedin" href="https://www.linkedin.com/in/benjamin-r-geyer/">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="3x"/>
                  </a>
                  <p></p>
                  <h4>Hire me for</h4>
                  <a title="Benjamin Geyer - Github" href="https://github.com/Benjamin-G"><FontAwesomeIcon icon={['fab', 'github-alt']} size="lg"/>  Github </a> <br/>
                  <FontAwesomeIcon icon={['fab', 'docker']} size="lg"/> Docker <span>| </span>  
                  <FontAwesomeIcon icon={['fab', 'js']} size="lg"/> Javascript <span>| </span>  
                  <FontAwesomeIcon icon={['fab', 'python']} size="lg"/> Python <br/>
                  <FontAwesomeIcon icon={['fab', 'aws']} size="lg"/> Aws <span>| </span>  
                  <FontAwesomeIcon icon={['fab', 'react']} size="lg"/> React / Redux <span>| </span>  
                  <FontAwesomeIcon icon={['fab', 'css3-alt']} size="lg"/> CSS3 <br/>
                  <FontAwesomeIcon icon={['fab', 'google']} size="lg"/> Firebase <span>| </span>  
                  <FontAwesomeIcon icon={['fab', 'html5']} size="lg"/> HTML5 <span>| </span>  
                  <FontAwesomeIcon icon={['fab', 'linux']} size="lg"/> Command Line <br/>
                  <FontAwesomeIcon icon={['fab', 'node']} size="lg"/> Node JS <span>| </span>  
                  <FontAwesomeIcon icon={['fab', 'sketch']} size="lg"/> Ruby <span>| </span>  
                  <FontAwesomeIcon icon={['fab', 'npm']} size="lg"/> NPM <br/>
                  <h5>and many more technologies</h5>
                  </p>
                  <div>
                    <p>Check out my story, see projects, or contact me below and
                    Have an awesome day!</p>
                  </div>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Story</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                {
                  //<li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Tech</a></li>
                }
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
