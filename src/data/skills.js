import {
  faAngular,
  faApple,
  faCss3,
  faGit,
  faGithub,
  faJs,
  faLinux,
  faNode,
  faReact,
  faSass,
  faWindows
} from '@fortawesome/free-brands-svg-icons'
import goIcon from '../assets/logo-icons/svg/go.svg';
import phpIcon from '../assets/logo-icons/svg/php.svg';
import sqlIcon from '../assets/logo-icons/svg/sql.svg';
import bashIcon from '../assets/logo-icons/svg/bash.svg';
import bootstrapIcon from '../assets/logo-icons/svg/bootstrap.svg';
import jQueryIcon from '../assets/logo-icons/svg/jquery.svg';
import jQueryUIIcon from '../assets/logo-icons/svg/jquery-ui.svg';
import unitTestingIcon from '../assets/logo-icons/svg/unit-testing.svg';
import oopIcon from '../assets/logo-icons/svg/object-oriented-programming.svg';
import tddIcon from '../assets/logo-icons/svg/test-driven-development.svg';
import agileIcon from '../assets/logo-icons/svg/agile.svg';
import jetbrainsIcon from '../assets/logo-icons/svg/jetbrains.svg';
import sublimeIcon from '../assets/logo-icons/svg/sublime-text.svg';
import pivotalIcon from '../assets/logo-icons/svg/pivotal-tracker.svg';
import pixelmatorIcon from '../assets/logo-icons/svg/pixelmator-pro.svg';
import vimIcon from '../assets/logo-icons/svg/vim.svg';
import omniGraffleIcon from '../assets/logo-icons/svg/omnigraffle.svg';
import virtualBoxIcon from '../assets/logo-icons/svg/virtualbox.svg';
import vmwareIcon from '../assets/logo-icons/svg/vmware.svg';
import jiraIcon from '../assets/logo-icons/svg/jira-software.svg';
import webpackIcon from '../assets/logo-icons/svg/webpack.svg';

const skills = {
  languages: [
    {
      name: 'Javascript',
      icon: faJs,
      iconType: 'fa'
    },
    {
      name: 'Go',
      icon: goIcon,
      iconType: 'image'
    },
    {
      name: 'PHP',
      icon: phpIcon,
      iconType: 'image'
    },
    {
      name: 'SASS/SCSS',
      icon: faSass,
      iconType: 'fa'
    },
    {
      name: 'CSS',
      icon: faCss3,
      iconType: 'fa'
    },
    {
      name: 'SQL',
      icon: sqlIcon,
      iconType: 'image'
    },
    {
      name: 'Bash',
      icon: bashIcon,
      iconType: 'image'
    }
  ],
  frameworks: [
    {
      name: 'AngularJS',
      icon: faAngular,
      iconType: 'fa'
    },
    {
      name: 'Bootstrap',
      icon: bootstrapIcon,
      iconType: 'image'
    },
    {
      name: 'ReactJS',
      icon: faReact,
      iconType: 'fa'
    }
  ],
  libraries: [
    {
      name: 'Node.js',
      icon: faNode,
      iconType: 'fa'
    },
    {
      name: 'jQuery',
      icon: jQueryIcon,
      iconType: 'image'
    },
    {
      name: 'jQueryUI',
      icon: jQueryUIIcon,
      iconType: 'image'
    }
  ],
  paradigms: [
    {
      name: 'Unit Testing',
      icon: unitTestingIcon,
      iconType: 'image'
    },
    {
      name: 'Object-oriented Programming (OOP)',
      icon: oopIcon,
      iconType: 'image'
    },
    {
      name: 'Test-driven Development (TDD)',
      icon: tddIcon,
      iconType: 'image'
    },
    {
      name: 'Agile Software Development',
      icon: agileIcon,
      iconType: 'image'
    }
  ],
  platforms: [
    {
      name: 'Windows',
      icon: faWindows,
      iconType: 'fa'
    },
    {
      name: 'MacOS/iOS',
      icon: faApple,
      iconType: 'fa'
    },
    {
      name: 'Linux',
      icon: faLinux,
      iconType: 'fa'
    }
  ],
  tools: [
    {
      name: 'Git',
      icon: faGit,
      iconType: 'fa'
    },
    {
      name: 'JetBrains',
      icon: jetbrainsIcon,
      iconType: 'image'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      iconType: 'fa'
    },
    {
      name: 'Sublime Text 3',
      icon: sublimeIcon,
      iconType: 'image'
    },
    {
      name: 'Pivotal Tracker',
      icon: pivotalIcon,
      iconType: 'image'
    },
    {
      name: 'Pixelmator',
      icon: pixelmatorIcon,
      iconType: 'image'
    },
    {
      name: 'VIM Text Editor',
      icon: vimIcon,
      iconType: 'image'
    },
    {
      name: 'OmniGraffle',
      icon: omniGraffleIcon,
      iconType: 'image'
    },
    {
      name: 'VirtualBox',
      icon: virtualBoxIcon,
      iconType: 'image'
    },
    {
      name: 'VMWare',
      icon: vmwareIcon,
      iconType: 'image'
    },
    {
      name: 'Jira',
      icon: jiraIcon,
      iconType: 'image'
    },
    {
      name: 'Webpack 3',
      icon: webpackIcon,
      iconType: 'image'
    }
  ]
};

export default skills;