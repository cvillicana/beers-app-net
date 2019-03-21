import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendActions } from '../../_actions/friend.actions';
import './main.scss'

// Components
import FriendWeekCard from './friend-week-card/friend-week-card';
import MainTitle from './main-title/main-title';
import Chronometer from '../shared-components/chronometer/chronometer';

class Main extends Component {

  componentDidMount(){
    this.props.dispatch(friendActions.getFriend())
  }

  render() {

    let friend = this.props.friends.friend;
    if(!friend || friend.length === 0){
        return (<p>Loading</p>)
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
              <MainTitle title="Happy Thursday"/>
              <Chronometer dateLimit={4}/>
              <FriendWeekCard friend={friend} />
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

const connectedMainPage = connect(mapStateToProps)(Main);
export { connectedMainPage as Main };