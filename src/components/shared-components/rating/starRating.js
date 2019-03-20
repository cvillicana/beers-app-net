import React, { Component } from "react";
import Star from "../../../assets/images/filled.png";
import EmptyStar from "../../../assets/images/empty.png";

class Rating extends Component {
  render() {
    let ratingObj = this.props.ratingObj;
    let stars = [];

    if(ratingObj < 0 || ratingObj >5){
      throw new Error ('error');
      return <div>Error</div>;
    }
    for (var i = 1; i <= 5; i++) {
      let path = Star;
      if (i > ratingObj) {
        path = EmptyStar;
      }
      stars.push(<img style={styles.image} src={path} alt="" />);
    }
    return <div>{stars}</div>;
  }
}

const styles = {
  image: {
    width: 25,
    height: 25
  }
};

export default Rating;
