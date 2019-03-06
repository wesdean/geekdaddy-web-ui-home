import React, {Component} from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-content">
          <div className="Footer-site-map">
            <label>Site Map</label>
            <ul>
              <li><a href="#home">Home</a></li>
              <li>
                <a href=""><label>About Me</label></a>
                <ul>
                  <li><a href="">My Apps</a></li>
                  <li><a href="">Resumé</a></li>
                </ul>
              </li>
              <li><a href="">Contact</a></li>
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