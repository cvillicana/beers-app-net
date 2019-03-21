import React, { Component } from 'react';
import './main.scss'

// Components
import FriendWeekCard from './friend-week-card/friend-week-card';
import MainTitle from './main-title/main-title';
import Chronometer from '../shared-components/chronometer/chronometer';

class Main extends Component {

  render() {

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <MainTitle title="Happy Thursday" />
            <Chronometer dateLimit={4} />
            <FriendWeekCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;