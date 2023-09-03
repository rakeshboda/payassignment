import "./index.css"
import { Component} from "react"
import {PiDotsThreeCircleLight} from "react-icons/pi"

class DestinationCard extends Component{
    render(){
        const {details}=this.props
        return(
            <li className="liElement">
                <img className="img" src={details.img} alt="x"/>
                <h6>{details.title}</h6>
                <div className="add-con">
                    <p className="addr">{details.address}</p>
                    <PiDotsThreeCircleLight/>
                </div>
            </li>
        )
    }
}
export default DestinationCard