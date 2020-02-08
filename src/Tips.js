// Tip 1: Avoid Weak Elements
import React from 'react';
import PropTypes from 'prop-types';
// Dont Do
// const Hoc = props => {
//   <p>{props.children}</p>;
// };

// Do
const Hoc = props => {
  return <div>{props.children}</div>;
};

export const Tip1 = props => {
  return (
    <Hoc>
      <div id={props.id}>{props.text}</div>
    </Hoc>
  );
};

// Tip 2: Declare Prop Types
// Tip 3: Don’t Hard Code HTML IDs
Tip1.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string.isRequired
};

// Tip 4: Declare Logical Defaults

Tip1.defaultProps = {
  text: 'Some Text',
  id: 'id_' + Math.floor(Math.random() * (100 - 1)) + 1
};

// Tip 5: Consider Accessibility (Allow user to access your page with keyboard)
// Use proper markups
// incase of no normal dom flow use tabIndex

// Tip 6: Consider Configuration Objects

// Tip 7: Consider Server-side Rendering
// Tip 8: Honor the Single Responsibility Principle
