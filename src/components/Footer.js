import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer id='footer' style={props.timeout ? { display: 'none' } : {}}>
    <p className='copyright'>
      {' '}
      Developed by <a href='https://github.com/Benjamin-G'>Benjamin Geyer</a> with starting design by{' '}
      <a href='https://html5up.net'>HTML5 UP</a>. Built with <a href='https://www.gatsbyjs.org/'>Gatsby.js</a> Deployed
      on <a href='http://aws.amazon.com'>AWS</a>
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
