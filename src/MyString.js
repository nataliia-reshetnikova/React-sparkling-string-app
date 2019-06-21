import React, { Component} from 'react';
import Letter from './Letter';
import './MyString.css';
import PropTypes from 'prop-types';

class MyString extends Component{
    static defaultProps = {
        myString:[
            {letter:'r',
            color: 'black'},
            {letter:'w',
            color:'red'},
            {letter:'g',
            color:"green"}]
    }
    static propTypes = {
        myString: PropTypes.arrayOf(PropTypes.object)
    }
    render(){
        const myString = this.props.myString.map((letter,index) => (
            <Letter
              key={index}
              letter={letter.letter}
              color={letter.color}
            />
          ));
        return(
            <div className="myString">
                {myString}
            </div>
        );
    }
}
   export default MyString;