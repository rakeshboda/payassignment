import "./index.css"
import { Component } from "react"

class Testimonialcard extends Component{
  

    render(){
        let {Details}=this.props
        return(
            <li className="test-con">
                <img className="test-img" src={Details.img} alt="x"/>
                <h5>{Details.name}</h5>
                <p>{Details.desc}</p>
            </li>
        )
    }
}
export default Testimonialcard