import React, {Component} from 'react';
import './contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="contact">
        <div className="Contact-section-label">Contact</div>
        <div className="Contact-info">
          <div>Wes Dean</div>
          <div><a href="mailto:support@geekdaddydean.com">support@geekdaddydean.com</a></div>
          <div><a href="tel:479-310-5756">479-310-5756</a></div>
        </div>
      </div>
    );
  }
}

export default Contact;