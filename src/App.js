import React, { Component } from 'react';
import MyString from"./MyString";
import './App.css';

const Text = "Lorem ipsum is a pseudo-Latin text used in web design";
const splitText = Text.split('');

class App extends Component {
  
  constructor(props) {
    super(props);
    const colorString = Array(splitText.length).fill().map(this.randColor,this);
    const myString = splitText.map(function(inst, i){
      return {
        letter: inst,
        color:  colorString[i]
      }
    });
    console.log(myString);
    this.state = {myString};
      /* one div changes color*/
      setInterval(() => {
        const myString = this.state.myString.slice();
        const randIndex = Math.floor(Math.random() * myString.length);
        myString[randIndex].color = this.randColor();
        this.setState({myString});
      }, 200);

        /* all divs change colors*/
      // setInterval(() => {
      //   const myString = this.state.myString.map((inst)=>{
      //       const allColors = [...this.props.allColors];
      //       const color = allColors[Math.floor(Math.random() * this.props.allColors.length)];
      //       return {letter:inst.letter, color:color}
      //   });
      //     this.setState({myString});
      // }, 300);

    }
      randColor(){
        let randInd = Math.floor(Math.random() * this.props.allColors.length);
        return this.props.allColors[randInd];
    }

    render() {
      return (
        <div className="App">
            <MyString myString={this.state.myString} />
        </div>
      );
    }
  }
  
  App.defaultProps = {
    allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
                "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
                "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
                "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
                "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
                "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
                "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
                "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
                "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
                "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
                "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
                "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
                "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
                "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
                "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
                "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
                "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
                "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
                "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
                "Yellow","YellowGreen"]
  };
  
  export default App;
