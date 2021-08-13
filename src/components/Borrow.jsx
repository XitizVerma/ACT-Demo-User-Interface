import React from 'react'
import './index.css';
import Cards from './Cards'

import useStateValue from './Context/StateProvider';


export default function Borrow() {

    const [initState, dispatch] = useStateValue()
    function speed()
          {
            alert("Machine Learning Book has been added to your Borrowing List.Kindly Checkout !");
          }
    function speed2()
          {
            alert("Shareable Link is : https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/Machine+Learning+Algorithms+Simplified.pdf");
          }
    
    return (
    <div>
        
        <div style={{fontFamily:"Courier New"}}>
        <br/>
            <ul>
                <li><a class="active" href="/borrow">Borrowed Books</a></li>
                <li><a href="/student">Profile</a></li>
            </ul>
            <h1 class="webkit" style={{color: "rgb(255, 238, 0)",textAlign:"center",fontSize:"5rem",margin:"0"}}>
            Student Dashboard</h1>
            <hr style={{width: "90%" ,backgroundColor:"rgb(255, 238, 0)",height: "5px",borderRadius:"10px"}}/>
            <br/>
            <section class="searchtext">Your Borrowed Books::</section><br/>
            <div style={{width: "50%",margin:"auto"}}>
                {console.log(initState)}
            {initState.map((val, index)=>{
                return (<Cards
                    link={val.link}
                    index={index}
                    image={val.image}
                    name={val.name} 
                />)
            })}
            </div>
        </div>
    </div>
    );
    
}