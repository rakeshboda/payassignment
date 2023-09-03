import "./index.css"
import { Component } from "react"
import Profilecard  from "../Profilecard"

class Midcontainer extends Component{
    state={profiles:[{id:1,name:"Jenny Wilson",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing...",profileImage:"https://snz04pap002files.storage.live.com/y4m3BtbmfmRBJ_JC9I07ekRRi5JN9JuHNWaPV74wXISLYwcH6O2HoJuY2LG2zOBbBSc2fxpg4DEpLNwuLRfCNQsqe5x4Pyuet1TCcGwlCbETBafREhVA9WwyQXwgPHTcLFlo2PMN7rgWHTbbPRMW7aoRs6BU9AiY4hSD2XLXl9MphbDxD43rQ787axei-UlSf2bYDjnIvRU9d6Ixjq2IXd0FQ?encodeFailures=1&width=140&height=141"},
    {id:2,name:"Jenny Wilson",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing...",profileImage:"https://snz04pap002files.storage.live.com/y4mdQkPtfj2uCOlRoeJpO6sR5ahnyR43riN7d5_PlwO6EX7FslWamy2mqJ462V6PKG-B51WT65y6E4npgpIc9pxsfrnOEaQjCYmvG7E5CEDw05UmRcEiloOSGE8sDv3EcZB7FbCsCvwOSLaPBDgL_-hVqxbO5153xTZHzW-BF5K279ZhHUjoqKif-Rth0a8G8UOWrbvgVNms4sd0uTeEnbE_A?encodeFailures=1&width=140&height=141"},
    {id:3,name:"Jenny Jakson",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing...",profileImage:"https://snz04pap002files.storage.live.com/y4mlJv8D_kCAZHIM-ADJn3J9vIqH0WqY1dLH8OVfsCUMhVx8NdEAkyhj8_GLa7X_sB2D2w6TgbeqGadESd4fj7OB8dtcgt97bpymyJ1nvbT0Mi3BcJflPbRu4A3oMkDPLl65mfVJToRExhwLWhpjHSKERVTX5FtYb0QPtIRydb-v_z3LrlP6877bhH80oZt3_3a5Z4_bchp0nQq0sSrvN5m5w?encodeFailures=1&width=140&height=141"}]}
 
    render(){

        let {profiles}=this.state 
        console.log(profiles)
        return(
            <div className="mid-container">
                <div className="profiles-section">
                    {profiles.map(eachprofile=>{
                        return <Profilecard key={profiles.id} profileDesc={eachprofile}/>
                })}        
                </div>
                <div className="mid-text">
                    <h1>Tropical Adventure <span>for students</span></h1>
                    <h5>Student Tropical Vacation: Relax and Recharge</h5>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit </li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>
                    <button className="courses-btn" type="button">Explore More</button>
                </div>
            </div>
        )
    }
}
export default Midcontainer