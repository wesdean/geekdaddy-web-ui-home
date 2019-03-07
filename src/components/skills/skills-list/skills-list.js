import React, {Component} from 'react';
import SkillsListItem from "../skills-list-item/skills-list-item";
import './skills-list.scss';

class SkillsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: props.skills
    };
  }

  render() {
    const children = [];

    this.state.skills.forEach((skill, index) => {
      children.push(<SkillsListItem name={skill.name} icon={skill.icon} iconType={skill.iconType} key={index}/>)
    });

    return (
      <div className="SkillsList">
        {children}
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({skills: nextProps.skills});
  }
}

export default SkillsList;