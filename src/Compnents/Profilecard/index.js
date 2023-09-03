import "./index.css"
import {Component} from "react"

class Profilecard extends Component{

    render(){
        let {profileDesc}=this.props
        return(
            <div className="pf-container">
                <img className="profile-img-size" src={profileDesc.profileImage} alt="x"/>
                <div>
                    <h6>{profileDesc.name}</h6>
                    <p>{profileDesc.desc}</p>
                </div>
            </div>
        )
    }
}
export default Profilecard