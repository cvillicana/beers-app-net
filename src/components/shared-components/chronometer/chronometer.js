import React, {Component} from 'react';

import './chronometer.scss';

class Chronometer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          chronometer: ""
        };

    }

    componentDidMount(){
        this.intervalId = setInterval(this.timer.bind(this), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    timer(){
        let limitDate = new Date();
        limitDate.setDate(limitDate.getDate() + (1 + 7 - limitDate.getDay()) % 4)
        limitDate.setHours(16, 0, 0, 0);

        var now = new Date().getTime();
      
        var distance = limitDate - now;
      
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var c = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(this.intervalId);
            c = "Beer Time";
        }

        this.setState({ chronometer: c });
    }

    render() {
        return (
            <p className="chronometer">{this.state.chronometer}</p>
        );
    }
}

export default Chronometer;