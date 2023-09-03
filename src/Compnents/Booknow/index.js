import "./index.css"
import { Component } from "react"
import {PiPlusSquareLight} from "react-icons/pi"
import {PiMinusSquare} from "react-icons/pi"
 

class Booknow extends Component{
    state={rating:4,rooms:5}

    
    decreaserating=()=>{
        let {rating}=this.state
        if (rating>0){
            this.setState(prevState=>({rating:prevState.rating-1}))
        }}
    
    increaserating=()=>{
        this.setState(prevState=>({rating:prevState.rating+1}))
    }

    increaserooms=()=>{
        this.setState(prevState=>({rooms:prevState.rooms+1} ))
    }

    decreaserooms=()=>{
        this.setState(prevState=>{
            if (prevState.rooms>0){
                return ({rooms:prevState.rooms-1})
            }
        })
    }


    


    

    render(){
        let {rating,rooms}=this.state
        

        return(
            <div className="bnmc">
                <h1 className="heading">Book now</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <label htmlFor="city">CITY</label>
                <br/>
                <input type="text" id="city" placeholder="city" />
                <div className="arr-dep-con">
                    <div>
                        <label  htmlFor="arrival">ARRIVAL</label>
                        <br/>
                        <input className="arr-dep" type="text" id="arrival" placeholder="10 October"/>
                    </div>
                    <div>
                        <label htmlFor="depature" >DEPATURE</label>
                        <br/>
                        <input className="arr-dep" type="text" id="depature" placeholder="01 January"/>
                    </div>
                </div>
                <div className="rat-roo">
                <div>
                    <label htmlFor="star">STAR</label>
                    <div className="rating-con">
                    <button type="button" onClick={this.decreaserating} className="stars"><PiMinusSquare/></button>
                    <input type="number" className="stars" value={rating}    />
                    <button type="button" onClick={this.increaserating} className="stars"><PiPlusSquareLight/></button>
                    </div>
                </div>

                <div>
                    <label htmlFor="star">Rooms</label>
                    <div className="rating-con">
                    <button type="button" onClick={this.decreaserooms} className="stars"><PiMinusSquare/></button>
                    <input type="number" className="stars" value={rooms}    />
                    <button type="button" onClick={this.increaserooms} className="stars"><PiPlusSquareLight/></button>
                    </div>
                </div>

                </div>

                <button className="booknow-btn" type="button">Book now</button>



            </div>
        )
    }
}
export default Booknow