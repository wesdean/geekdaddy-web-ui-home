import React, {Component} from 'react';
import './my-apps-list-item.scss';
import MyAppsTag from "../my-apps-tag/my-apps-tag";

class MyAppsListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionToggle: props.descriptionToggle
    };
  }


  render() {
    if (!this.props.app) {
      return null;
    }

    return (
      <div className="MyAppsListItem">
        <div className="MyAppsListItem-title">
          {this.props.app.href ?
            <a href={this.props.app.href} target="_blank" rel="noopener noreferrer">
              {(() => {
                if (this.props.app.icon) {
                  return <img className="icon" src={this.props.app.icon} alt={this.props.app.title}/>
                }
              })()}
              <div className="title">{this.props.app.title}</div>
            </a>
            :
            <span>{this.props.app.title}</span>
          }
        </div>
        <div className="MyAppsListItem-content">
          {(() => {
            if (this.props.app.brief) {
              return <div className="MyAppsListItem-brief">{this.props.app.brief}</div>
            }
            return null;
          })()}
          {(() => {
            if (this.props.app.description) {
              const toggleClass = this.state.descriptionToggle ? 'less' : 'more';
              const toggleText = this.state.descriptionToggle ? 'Less' : 'More';
              return (
                <div className={"MyAppsListItem-description-toggle " + toggleClass} onClick={this.toggleDescription}>
                  [{toggleText}]
                </div>
              );
            }
            return null;
          })()}
        </div>
        {(() => {
          if (this.state.descriptionToggle) {
            const showClass = this.state.descriptionToggle ? 'show' : '';
            return <div className={"MyAppsListItem-description " + showClass}>{this.props.app.description}</div>
          }
          return null;
        })()}
        {(() => {
          if (Array.isArray(this.props.app.skills)) {
            const skills = [];
            const maxTags = this.state.descriptionToggle ? this.props.app.skills.length : 3;
            for (let i = 0; (i < this.props.app.skills.length && i < maxTags); i++) {
              skills.push(<MyAppsTag key={i}>{this.props.app.skills[i]}</MyAppsTag>);
            }
            if (skills.length > 0) {
              return skills;
            }
          }
          return null;
        })()}
      </div>
    );
  }

  toggleDescription = () => {
    this.setState({descriptionToggle: !this.state.descriptionToggle});
  };
}

export default MyAppsListItem;