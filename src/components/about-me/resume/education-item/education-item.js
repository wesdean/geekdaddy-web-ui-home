import React, {Component} from 'react';
import './education-item.scss';

class EducationItem extends Component {
  render() {
    return (
      <div className="EducationItem">
        <div className="title">{this.props.item.title}</div>
        <div className="location">{this.props.item.location}</div>
        <div className="degree">
          {(() => {
            let degreeItems = this.props.item.degree;
            if (typeof degreeItems === 'string') {
              degreeItems = [degreeItems];
            }
            const degree = [];
            degreeItems.forEach((degreeItem, index) => {
              const seperator = degreeItems.length > 1 ? ';' : '';
              const className = index === 0 ? 'degree-item degree-name' : 'degree-item';
              degree.push(<div className={className} key={index}>{degreeItem + seperator}</div>);
            });
            return degree;
          })()}
        </div>
      </div>
    );
  }
}

export default EducationItem;