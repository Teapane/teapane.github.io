import React, {Component} from 'react';


export default class Footer extends Component {

  render() {
    return (
      <div>
        This is the footer!
        <div className='footer-social-links'>
          <a className='fa fa-github fa-1x' href='https://www.github.com/Teapane'></a>
          <a className='fa fa-twitter fa-1x' href='https://www.twitter.com/teapane'></a>
        </div>
      </div>
    )
  }
}
