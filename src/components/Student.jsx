import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Cards from './Cards';
import data from './Data';

import useStateValue from './Context/StateProvider';

import { ADD_BORROW } from './Context/reducer';
export default function Student  () {
    const [initState, dispatch] = useStateValue()
    function speed(index)
          {
            alert("Machine Learning Book has been added to your Borrowing List.Kindly Checkout !");
            const update = data[index]
            console.log(update)
            dispatch({
              type: ADD_BORROW,
              payload:update
            })
          }
    function speed2()
          {
            alert("DevOps Journal has been added to your Borrowing List.Kindly Checkout !");
          }
    function speed3(link)
          {
            alert("Shareable Link is : "+link);
          }
    function speed4()
          {
            alert("Shareable Link is : https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DevOps+Roadmap.jpg");
          }

   
    return (
    <div style={{fontFamily:"Courier New"}}>
        <br/>
        <ul>
            <li><Link to="/borrow">Borrowed Books</Link></li>
            <li><Link class="active" to="/student">Profile</Link></li>
        </ul>

        <h1 class="webkit" style={{color: "rgb(255, 238, 0)",textAlign:"center",fontSize:"5rem",margin:0}}>
        Student Dashboard</h1>
        <hr style={{width: "90%", backgroundColor:"rgb(255, 238, 0)",height: "5px",borderRadius:"10px"}}/>
        <header class="enter" style={{float:"left",paddingLeft:"8",color: "rgb(11, 11, 129)"}}>
            Easily Manage Books, Newsletters etc. from a Powerful Dashboard!</header><br/>
        <p class="enter">Enter the Book/Journal/Newsletter:</p>
        <section class="searchtext"><b>ACT Library Search</b></section>
        <div class="bar">
          {console.log(initState)}
        <a href={"http://integratedonlineedigitallibraryact.s3.amazonaws.com/"}>
            <input class="searchbar" type="text" title="Search" 
            placeholder="Search over 784393458 resources in ACT Library!"/>
                <img class="voice" alt="Google mic"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
                title="Search by Voice"/>
            </a>
        </div>

        <br/>
        <section class="searchtext">Your Recently Viewed Articles:</section><br/>
        <section class="searchtext" style={{fontSize: "18px"}}><b>Click on any article to read:</b></section><br/>
        <div style={{width: "50%",margin:"auto"}}>
    

        {data.map((val,index)=>{
            return (
                <Cards  
                    link={val.link}
                    index={index}
                    image={val.image}
                    name={val.name}
                    borrow={speed} 
                    share={speed3}/>
        )})}

    </div>
    </div>
    );

}

