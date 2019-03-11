import React, {Component} from 'react';
import apps from '../../../../data/my-apps';
import MyAppsListItem from "../my-apps-list-item/my-apps-list-item";

class MyAppsList extends Component {
  render() {
    const items = [];
    if (Array.isArray(apps)) {
      apps.forEach((app, index) => {
        items.push(<MyAppsListItem app={app} key={index}/>);
      });
    }

    return (
      <div className="MyAppsList">{items}</div>
    );
  }
}

export default MyAppsList;