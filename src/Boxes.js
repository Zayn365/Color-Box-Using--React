import { Component } from "react";
import ColorBox from "./ColorBox";
import "./Boxes.css";

class Boxes extends Component{
static defaultProps = {
    numBoxes: 21
}


    render(){
const len = this.props.numBoxes;       
const arr = Array(len).fill(18).map((_,index) => {
   return <ColorBox key={index} />
    })
        return (
            <div className="BoxContainer">
                {arr}
            </div>
        )
    } 
}


export default Boxes