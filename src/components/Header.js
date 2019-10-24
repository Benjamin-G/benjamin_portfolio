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
                  About Me
                  <br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices. Habitasse platea dictumst quisque sagittis purus sit amet. Sit amet dictum sit amet justo donec enim. In mollis nunc sed id semper risus in. Ipsum faucibus vitae aliquet nec ullamcorper sit. A iaculis at erat pellentesque adipiscing. 
                  <br/> <br/> <h4>Tech known:</h4>
                  <FontAwesomeIcon icon={['fab', 'github']} size="lg"/>  Github <br/>
                  <FontAwesomeIcon icon={['fab', 'js']} size="lg"/> Javascript <br/>
                  <FontAwesomeIcon icon={['fab', 'python']} size="lg"/> Python <br/>

                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Story</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
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
