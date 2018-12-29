import React, { Component } from 'react';
import styled from 'styled-components';
import { HourHand, MinuteHand, SecondHand } from './ClockHands';
import { setTitle } from '../../services/title';

const StyledClock = styled.svg`
  width: 250px;
  height: 250px;
  fill: #ededed;
  stroke: black;
  stroke-width: 1;
  stroke-linecap: round;

  .marks {
    transform: translate(20px, 20px);
    stroke-width: 0.2;

    > :nth-child(3n + 1) {
      stroke-width: 0.5;
    }
  }
  .seconds {
    stroke-width: 0.3;
    stroke: #d00505;
  }
  .minute {
    stroke-width: 0.6;
  }
  .hour {
    stroke-width: 1;
  }
  .pin {
    stroke: #d00505;
    stroke-width: 0.2;
  }
`;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    setTitle(`${this.state.date.toLocaleTimeString()} | ${this.state.date.toLocaleDateString()}`);
    let hourLines = [];
    let i = 0;
    while (i < 12) {
      const atts = { transform: `rotate(${i * 30})` };
      hourLines.push(<line key={i.toString()} {...atts} x1={i % 3 === 0 ? 14 : 15} y1="0" x2="16" y2="0" />);
      i++;
    }

    return (
      <div>
        <StyledClock viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="19" />
          <g className="marks">{hourLines}</g>
          <HourHand degrees={this.state.date.getHours() * 30 + 30 * (this.state.date.getMinutes() / 60)} />
          <MinuteHand degrees={this.state.date.getMinutes() * 6 + 6 * (this.state.date.getSeconds() / 60)} />
          <SecondHand degrees={this.state.date.getSeconds() * 6} />
          <circle cx="20" cy="20" r="0.7" className="pin" />
        </StyledClock>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
