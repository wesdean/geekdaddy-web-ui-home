import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SocialNetworkLink extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer" className="SocialNetworkLink">
        <figure>
          <FontAwesomeIcon icon={this.props.icon}/>
          <figcaption>{this.props.href}</figcaption>
        </figure>
      </a>
    );
  }
}

export default SocialNetworkLink;