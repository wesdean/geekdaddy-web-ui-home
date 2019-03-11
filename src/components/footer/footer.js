import React, {Component} from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-content">
          <div className="Footer-site-map">
            <label>Site Map</label>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li>
                <Link to="/@#about-me"><label>About Me</label></Link>
                <ul>
                  <li><Link to="/@#skills">Skills</Link></li>
                  <li><Link to="/@#my-apps">My Apps</Link></li>
                  <li><Link to="/@#resume">Resumé</Link></li>
                </ul>
              </li>
              <li><Link to="/@#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="Footer-contact">
            <div>Wes Dean</div>
            <div>wes@geekdaddydean.com</div>
            <div>Ph. 479-310-5756</div>
            <div>http://geekdaddydean.com</div>
          </div>
        </div>
        <div className="Footer-copyright">
          Copyright {'\u00A9'} 2019 - GeekDaddy Dean Inc.
        </div>
      </div>
    );
  }
}

export default Footer;