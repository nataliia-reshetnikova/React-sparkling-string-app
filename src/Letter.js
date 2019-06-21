import React from 'react';
import PropTypes from 'prop-types';
import './Letter.css';

const Letter = ({letter,color}) => {
    const styles = { color: color};
    return (
      <div className = "letter" style={styles}>
          {letter}
      </div>
    );
  }
  
  Letter.propTypes = {
    letter:PropTypes.string,
    color: PropTypes.string,
  };
  export default Letter;