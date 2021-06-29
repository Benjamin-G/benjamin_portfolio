import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import pittsburgh from '../images/pittsburgh.jpg';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className='close'
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id='main'
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id='intro'
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>How did I get here?</h2>
          <span className='image main'>
            <img src={pittsburgh} alt='Pittsburgh' />
          </span>
          <p style={{ textIndent: '30px' }}>
            I was born in the late 80’s in Pittsburgh, PA. I started with Object Oriented Programming in C++ and Java
            during high school. That led me to pursue a Computer Science degree after high school then Mathematics;
            followed by a short career in Material Science after an Asc. Degree in Chemistry. The education was with
            Bidwell Training center, which is where I learned to love nontraditional forms of education. I finished my
            BS Degree in Science from the University of Pittsburgh with night classes while working in a cutting edge
            Neuroscience Department (PIND). This allowed me to learn more about Geology, Physics, and Neuroscience. I
            did get some exposure to SQL in a GIS course.
          </p>
          <p style={{ textIndent: '30px' }}>
            After the end of 2016 with my degree being completed; I found Javascript, functional programming and the
            wonderful deep field of web development. I quickly became aware of my passion was in software. With my
            background in CS I quickly learned JS (React and Vanilla) , Webpack , Babel , HTML5/CSS3, Node and Ruby
            (Rails). This was just a starting point. I started pursuing jobs very early on, this was very challenging
            and valuable looking back. Having been given coding assignments in tools I had no experience with such as
            Python ( Flask ), Websockets, C#( .NET ) and Java (spring). During this time I used tools like Hackerrank
            and Codeingames to hone in my coding flow and problem solving. Consistently reading Stackoverflow, Medium
            articles and started to follow the tech community on Twitter. Also taking a consistent stream of Udemy
            course to build projects, learn concepts and learn technologies outside my wheelhouse, that is where I
            really honed in my React, Redux, Docker, SQL and vanilla JS, HTML, CSS. Some great teachers I found were
            Bret Fisher, Stephen Grider, Andrew Mead, and Jonas Schmedtmann
          </p>
          <p style={{ textIndent: '30px' }}>
            Most importantly, I started to participate in the coding community in Pittsburgh. Having gone to many
            meetups from Code&Supply, Pittsburgh Functional, Pittsburgh QA, Python Users and more. I had gained insight
            into many of the deep corners of this field. It cannot be overstated how important these meetups where.
            Getting exposure to Kotlin, Scala, Go, Rust, and Elixir. Not just technologies where experienced, soft
            skills talks and discussion as well.
          </p>
          <p style={{ textIndent: '30px' }}>
            Forward to 2018 spring, still unemployed in tech and after a major loss in my family. I took sometime off
            from the job hunt. I pursued some time in looking into Game Development and did not love it. I did also
            teach myself some Data Science with Python, Jupyter Notebooks, Numpy and Plotly. I gained insight that I
            enjoy Data alot. I continued to keep my web development sharp along this path. This is the period I learned
            Docker, which I really enjoy.
          </p>
          <p style={{ textIndent: '30px' }}>
            In the spring of 2019, I found myself inspired by the landscape and opportunities here in San Diego. I
            signed up for Learn Academy Echo Class of 2019. I quit my job, packed my bags and moved across the country .
            I wanted to grow as an individual by moving to a completely new region in the USA. Continuing to attend
            meetups here, I have happily found extremely talented and friendly engineers. My favorite meetups here are
            SD Tech Hub, Ruby, Data Engineering, Javascript, and Tech Events. I am also excited to learn more about F#
            (functional/domain design), Airflow, Sagemaker, Redshift and SQL. Thank you for reading my story, I cannot
            wait to continue adding more paragraphs.
          </p>
          {close}
        </article>

        <article
          id='work'
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Work</h2>
          <span className='image main'>
            <img src={pic02} alt='' />
          </span>
          <p style={{ textIndent: '30px' }}>
            This will have my projects soon. Having slight issues with the CMS query! You can checkout my Github in the
            meantime!
          </p>
          <a title='Benjamin Geyer - Github' href='https://github.com/Benjamin-G'>
            <FontAwesomeIcon icon={['fab', 'github-alt']} size='lg' /> Github{' '}
          </a>{' '}
          <br />
          {close}
        </article>

        <article
          id='about'
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>About</h2>
          <span className='image main'>
            <img src={pic03} alt='' />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend
            sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
            Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum
            primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
          </p>
          {close}
        </article>

        <article
          id='contact'
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {
            // Make sure this works
            // Contact Form
            // Formspree (from gatsby docs)
          }
          <h2 className='major'>Contact</h2>
          <form action='https://formspree.io/xwkeolpb' method='POST'>
            <div className='field half first'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div className='field half'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' id='email' />
            </div>
            <div className='field'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' rows='4'></textarea>
            </div>
            <ul className='actions'>
              <li>
                <input type='submit' value='Send Message' className='special' />
              </li>
              <li>
                <input type='reset' value='Reset' />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
