import React, {Component} from 'react';
import MyAppsList from "./my-apps-list/my-apps-list";

class MyApps extends Component {
  render() {
    return (
      <div className="MyApps" id="my-apps">
        <MyAppsList/>
      </div>
    );
  }
}

export default MyApps;