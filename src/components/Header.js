import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-code"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Benjamin Geyer</h1>
                    <span className="icon fa-code"></span>
                    <span className="icon fa-js-square"></span>
                    <i className="icon fa-js"></i>
                <p>
                  About Me
                  <br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices. Habitasse platea dictumst quisque sagittis purus sit amet. Sit amet dictum sit amet justo donec enim. In mollis nunc sed id semper risus in. Ipsum faucibus vitae aliquet nec ullamcorper sit. A iaculis at erat pellentesque adipiscing. Mauris cursus mattis molestie a iaculis at erat pellentesque. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sed arcu non odio euismod. Dui nunc mattis enim ut. Viverra nibh cras pulvinar mattis nunc sed. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Nunc vel risus commodo viverra maecenas. Morbi tempus iaculis urna id. Varius duis at consectetur lorem donec massa. Massa enim nec dui nunc mattis enim ut tellus elementum. Lacus luctus accumsan tortor posuere ac ut consequat semper.
                  <br/>
                  <br/>
                  <br/>
                  Tech known:
                  Javascript
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
