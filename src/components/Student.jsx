import React from 'react';
import './index.css';
import Cards from './Cards';
import data from './Data';
import Search from './Search';
export default function Student  ({borrowlist, updateBorrowList}) {
    function speed(index)
          {
            alert("Machine Learning Book has been added to your Borrowing List.Kindly Checkout !");
            const newList = [...borrowlist]
            newList.push(data[index])
            console.log(newList)
            updateBorrowList(newList)
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
            <li><a href="/borrow">Borrowed Books</a></li>
            <li><a class="active" href="/student">Profile</a></li>
        </ul>

        <h1 class="webkit" style={{color: "rgb(255, 238, 0)",textAlign:"center",fontSize:"5rem",margin:0}}>
        Student Dashboard</h1>
        <hr style={{width: "90%", backgroundColor:"rgb(255, 238, 0)",height: "5px",borderRadius:"10px"}}/>
        <header class="enter" style={{float:"left",paddingLeft:"8",color: "rgb(11, 11, 129)"}}>
            Easily Manage Books, Newsletters etc. from a Powerful Dashboard!</header><br/>
        <p class="enter">Enter the Book/Journal/Newsletter:</p>
        <Search/>

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

