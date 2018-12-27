import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.line`
  transform-origin: center;
  transform: rotate(${props => props.degrees}deg);
`;

function HourHand(props) {
  return <StyledLine degrees={props.degrees} x1="20" y1="11" x2="20" y2="20" className="hour" />;
}

function MinuteHand(props) {
  return <StyledLine degrees={props.degrees} x1="20" y1="7" x2="20" y2="20" className="minute" />;
}

function SecondHand(props) {
  return <StyledLine degrees={props.degrees} x1="20" y1="4" x2="20" y2="20" className="seconds" />;
}

export { HourHand, MinuteHand, SecondHand };
