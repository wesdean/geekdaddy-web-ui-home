import React, {Component} from 'react';
import resume from '../../../data/resume';
import EducationItem from "./education-item/education-item";
import ExperienceItem from "./experience-item/experience-item";
import './resume.scss';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandSkills: props.expandSkills
    };
  }


  render() {
    let education;
    if (resume.sections.education && Array.isArray(resume.sections.education.items) && resume.sections.education.items.length > 0) {
      education = [<div className="Resume-section-heading"
                        key="education-heading">{resume.sections.education.title}</div>];

      const educationItems = [];
      resume.sections.education.items.forEach((item, index) => {
        educationItems.push(<EducationItem item={item} key={index}/>);
      });
      education.push(<div className="Resume-item-list" key="education-list">{educationItems}</div>);
      education = <div className="Resume-section">{education}</div>;
    }

    let experience;
    if (resume.sections.experience && Array.isArray(resume.sections.experience.items) && resume.sections.experience.items.length > 0) {
      experience = [<div className="Resume-section-heading"
                         key="experience-heading">{resume.sections.experience.title}</div>];

      const experienceItems = [];
      resume.sections.experience.items.forEach((item, index) => {
        experienceItems.push(<ExperienceItem item={item} key={index}/>)
      });
      experience.push(<div className="Resume-item-list" key="experience-list">{experienceItems}</div>);
      experience = <div className="Resume-section">{experience}</div>;
    }

    let skills;
    if (Array.isArray(resume.skills) && resume.skills.length > 0) {
      skills = [<div className="Resume-section-heading" key="skills-heading">Skills</div>];
      const defaultMax = 6;
      const maxSkills = this.state.expandSkills ? resume.skills.length : defaultMax;
      const skillsItems = [];
      for (let i = 0; i < resume.skills.length && i < maxSkills; i++) {
        skillsItems.push(<li key={i}>{resume.skills[i]}</li>);
      }

      let moreSkills;
      if (resume.skills.length > defaultMax) {
        const moreSkillsText = this.state.expandSkills ? 'Less' : 'More';
        moreSkills =
          <div className="Resume-expand-skills" onClick={this.toggleMoreSkills}>[{moreSkillsText} Skills]</div>;
      }


      skills.push(
        <div className="Resume-item-list" key="skills-list">
          <ul>{skillsItems}</ul>
          {moreSkills}
        </div>
      );
      skills = <div className="Resume-section">{skills}</div>;
    }

    return (
      <div className="Resume" id="resume">
        <div className="Resume-name">{resume.name}</div>
        <div className="Resume-website">
          Website: <a href={resume.website} target="_blank" rel="noopener noreferrer">{resume.website}</a>
        </div>
        <div className="Resume-email">Email: <a href={`mailto:${resume.email}`}>{resume.email}</a></div>
        <div className="Resume-linkedin">
          LinkedIn: <a href={resume.linkedin} target="_blank" rel="noopener noreferrer">{resume.linkedin}</a>
        </div>
        <div className="Resume-phone">Phone: <a href={`tel:${resume.phone}`}>{resume.phone}</a></div>
        {(() => {
          if (resume.pdf) {
            return (
              <div className="Resume-pdf">
                <a href={resume.pdf} target="_blank" rel="noopener noreferrer">View PDF</a>
              </div>
            );
          }
        })()}
        {(() => {
          if (resume.summary) {
            return <div className="Resume-summary">{resume.summary}</div>;
          }
        })()}
        {education}
        {experience}
        {skills}
      </div>
    );
  }

  toggleMoreSkills = () => {
    this.setState({expandSkills: !this.state.expandSkills});
  }
}

export default Resume;