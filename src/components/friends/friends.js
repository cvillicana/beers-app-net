import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendActions } from "../../_actions/friend.actions";
import FriendCard from '../shared-components/friend-card/friend-card.js';
import './friends.scss'

class Friends extends Component {

    componentDidMount(){
      this.props.dispatch(friendActions.getFriends())
    }
  render() {

    let friends = this.props.friends.all;
    if(!friends || friends.length === 0){
        return (<p>Loading</p>)
    }

    return (
      <div className="container-fluid">
        <div className="row justify-content-around justify-content-xs-center align-items-center">
         {/* Another Component */}
                {
                    friends.map((item, idx) => 
                        <div key={idx} className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                          <FriendCard friend={item} />
                        </div>
                    )
                }
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
  
const connectedFriendsPage = connect(mapStateToProps)(Friends);
export { connectedFriendsPage as Friends };