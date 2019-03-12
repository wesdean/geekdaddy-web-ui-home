import React, {Component} from 'react';
import moment from 'moment';
import './experience-item.scss';

class ExperienceItem extends Component {
  render() {
    if (!this.props.item) {
      return null;
    }

    let startDate = moment(this.props.item.startDate, 'YYYY-MM');
    let endDate = moment(this.props.item.endDate, 'YYYY-MM');
    if (startDate.isValid()) {
      startDate = startDate.format('MMM YYYY');
    } else {
      startDate = this.props.item.startDate;
    }
    if (!endDate.isValid()) {
      endDate = endDate.format('MMM YYYY');
    } else {
      endDate = this.props.item.endDate;
    }

    return (
      <div className="ExperienceItem">
        <div className="position">{this.props.item.position}</div>
        <div className="company">{this.props.item.company}</div>
        <div className="date">{`${startDate} - ${endDate}`}</div>
        <div className="location">{this.props.item.location}</div>
        <div className="details">{this.props.item.details}</div>
      </div>
    );
  }
}

export default ExperienceItem;