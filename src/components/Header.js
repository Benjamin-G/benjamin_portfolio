import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-laptop"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Benjamin Geyer</h1>
                <i class="fab fa-js"></i>
                <i class="fab fa-js"></i>
                <p>
                  <h4>About Me</h4>
                  <br/>
                  I am motivated software engineer from Pittsburgh, PA  currently living in beautiful San Diego, CA. I love the web platform and interesting use cases of CS concepts. Functional programming, data engineering and modern web development are some of my favorite topics.
                  <br/>
                  <br/>

                  <p>
                    <a name="Linkedin" href="https://www.linkedin.com/in/benjamin-r-geyer/">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
                    </a>
                  </p> <h4>Tech known</h4>
                  <FontAwesomeIcon icon={['fab', 'github']} size="lg"/>  Github <br/>
                  <FontAwesomeIcon icon={['fab', 'docker']} size="lg"/> Docker <br/>
                  <FontAwesomeIcon icon={['fab', 'js']} size="lg"/> Javascript <br/>
                  <FontAwesomeIcon icon={['fab', 'python']} size="lg"/> Python <br/>
                  <FontAwesomeIcon icon={['fab', 'aws']} size="lg"/> Aws <br/>
                  <FontAwesomeIcon icon={['fab', 'css3-alt']} size="lg"/> CSS3 <br/>
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Story</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                {
                  //<li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
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
