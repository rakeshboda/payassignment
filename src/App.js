
import './App.css';
import {Component} from "react"
import Header from "./Compnents/Header"
import Topcontainer from "./Compnents/Topcontainer"
import Midcontainer from "./Compnents/Midcontainer"
import DestinationCard from './Compnents/DestinationCard';
import Booknow from './Compnents/Booknow';
import Testimonialcard  from './Compnents/Testimonialcard';


class App extends Component{
  state={destinationsList:[{id:1,title:"Harward University",address:"Cambridge,Massachusetts,UK",img:"https://snz04pap002files.storage.live.com/y4mPHrN-ICQtmwP8B0XKAbyi7ubJvscqx36CpWcheCvABjmg9BfjYMLyfXZQaP0nt2IVwSMgudwr0Ru0GZBecFF9IdjFoESMgnuTwTXT7mVM-xbbxMbu4BrLHT6BKnhVRfJ_en_ZzpoZBj8X3jsUTS1MzCUvB571-gGPdmYW1wx1LM61DYsvMrRW9QO8i_e4lnrmtgMhzb6RjrfSdl9aTG15g?encodeFailures=1&width=192&height=174"},
{id:2,title:"Oxford University",address:"Oxford,England",img:"https://snz04pap002files.storage.live.com/y4m1k1_ASGMr-cC4813G-9tXBIswG5npOEbRZJtKWtN4sc1N3P9RC6J535SJkMSOmS1YZx_A0Qk_1O62RbPY83M1hLwRjcv8rVqSUOBfQ97J3FiVM7vU8_FmLwCrI3akWTR5cnriWTxlJHF_zFlKqPMs3HNJ43uPQxjxCy4Or5tbHc5y0GH0m_66FobL6bf2d1K2z6-DEeKooq652oCqQWO2w?encodeFailures=1&width=768&height=698"},
{id:3,title:"Stanford University",address:"Stanford, California",img:"https://snz04pap002files.storage.live.com/y4mBvcbnTSBMgvwjya3ZQM3TDqAT2Shbr0j5BG2sZPp2WdSNZJox441GYTCslWgIhlr1buzhnIzH1Xq3diyONF6FeSix1cFOM3b-mwj-nAQif2k-w0emt2wTx_jtZnggFryedzIALJdqml2jVtUSge-WyjYUiqzgWbogOs1AZ7KTZ1XvUcA7EuDzH8xxkm5KKZk5JDEAtk8HgMwNgSA5ajzvw?encodeFailures=1&width=768&height=698"}],
testimonials:[{id:1,img:"https://snz04pap002files.storage.live.com/y4mdQkPtfj2uCOlRoeJpO6sR5ahnyR43riN7d5_PlwO6EX7FslWamy2mqJ462V6PKG-B51WT65y6E4npgpIc9pxsfrnOEaQjCYmvG7E5CEDw05UmRcEiloOSGE8sDv3EcZB7FbCsCvwOSLaPBDgL_-hVqxbO5153xTZHzW-BF5K279ZhHUjoqKif-Rth0a8G8UOWrbvgVNms4sd0uTeEnbE_A?encodeFailures=1&width=140&height=141",name:"Corey Korsgaard",desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
{id:2,img:"https://snz04pap002files.storage.live.com/y4m3BtbmfmRBJ_JC9I07ekRRi5JN9JuHNWaPV74wXISLYwcH6O2HoJuY2LG2zOBbBSc2fxpg4DEpLNwuLRfCNQsqe5x4Pyuet1TCcGwlCbETBafREhVA9WwyQXwgPHTcLFlo2PMN7rgWHTbbPRMW7aoRs6BU9AiY4hSD2XLXl9MphbDxD43rQ787axei-UlSf2bYDjnIvRU9d6Ixjq2IXd0FQ?encodeFailures=1&width=140&height=141",name:"Jakob Aminoff",desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
{id:3,img:"https://snz04pap002files.storage.live.com/y4mlJv8D_kCAZHIM-ADJn3J9vIqH0WqY1dLH8OVfsCUMhVx8NdEAkyhj8_GLa7X_sB2D2w6TgbeqGadESd4fj7OB8dtcgt97bpymyJ1nvbT0Mi3BcJflPbRu4A3oMkDPLl65mfVJToRExhwLWhpjHSKERVTX5FtYb0QPtIRydb-v_z3LrlP6877bhH80oZt3_3a5Z4_bchp0nQq0sSrvN5m5w?encodeFailures=1&width=140&height=141",name:"Carla Press",desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}]
}
componentDidMount(){
  document.title="PayInstacardAssignment"
}
  render(){
    const {destinationsList,testimonials}=this.state

    return(
      <div className='app-container'>
        <Header/>
        <Topcontainer/>
        <Midcontainer/>
        
        <div className='destinations-container'>
        <h6>Our Destinations</h6>
        <ul className='destinations'>{
          destinationsList.map(eachDestination=>{
            return <DestinationCard key={eachDestination.id} details={eachDestination}/>
          })
          }
        </ul>
        </div>
<div className='discounts-container'>
  <div className='dis-img-container'>
    <img className='dis-img' src="https://snz04pap002files.storage.live.com/y4mrmRjPvdyep9xrYvZkqGkBvWG-G1b7AFXv636S969ATrCAf7qkRmqG8hEo4tDxx59rYbOWbGK4wz50ecYFxtI9qUe8vuSFA6Ub_V2tgx1f_ZR_Nxb1toSiHNRxELvi71f3OeUosmul9FjeT0kpjjmFN_RgsPXGq6cw_Ng9545Xti00SUG_2TrpEHY_D4DOZeEH3PeV-VTOmkAc1DyvHKiwA?encodeFailures=1&width=499&height=698" alt="x"/>
  </div>
  <div className='dis-text'>
    <h5>Get 20% off for students</h5>
    <h1>Student discounts available.<span>
Get ready for some fun in the sun!</span></h1>
<ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit </li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>
                    <button className='courses-btn' type="button">Explore More</button>
  </div>
</div>
<div className='booknow-con'>
  <img className='booknow-img' src="https://snz04pap002files.storage.live.com/y4mAKKpXaXszCTzFDYX4w6-EmKiSeP1mqTK05CkWhK7vcDf2sSh9AsMoz6ENuu_XCTC0Ve7L6c59Q7J_gchwbnjyMXKEr9pD3SF5nQdpN39lHMxyOnbllvY9jlvS-vW6g2H9DXE4Z0u2BIpxOiScy7S2Su0X70MGV4yWdYmO6UFVk4GxHVcBHzDkzVrU2pY3EslAhMrwGwlPL4jdPS5izcmRA?encodeFailures=1&width=246&height=354" alt="x"/>
  <div className='booknow-component'>
  <Booknow/>
</div>
</div>
<div className='testimonials-container'>
  <h3>Testimonials</h3>
  <ul className='un-ordere-list'>
    {testimonials.map(testmonialcard=>{
      return <Testimonialcard key={testimonials.id} Details={testmonialcard}/>
    })}
  </ul>
</div>
<div className='footer'>
  <h2>Student Special: Discounted rates on tropical getaways!</h2>
  <p>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
</div>
<div className='fin-foo'>
  <ul className='foo-ul'>
    <li className='foo-li'>Privacy Policy</li>
    <li className='foo-li'>Terms of use</li>
    <li className='foo-li'>Sales and Refunds</li>
    <li className='foo-li'>Legal</li>
  </ul>
  <ul className='foo-ul'>
    <li className='foo-li2'>About</li>
    <li className='foo-li2'>Shedules</li>
    <li className='foo-li2'>Pricing</li>
    <li className='foo-li2'>Membership</li>
    <li className='foo-li2'>Joins</li>
  </ul>

</div>

     </div>
    )
  }
}


export default App;
