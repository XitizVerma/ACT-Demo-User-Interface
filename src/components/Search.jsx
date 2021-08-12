import React,{useEffect} from 'react'
import axios from 'axios'
export default function Search() {
    useEffect(() => {
        axios.get('http://integratedonlineedigitallibraryact.s3.amazonaws.com/')
        .then((response)=>{
            console.log(response.data);
        })
        .catch(err=>{console.log(err)})
        
    }, [])
    return (
        <div>
            <section class="searchtext">ACT Library Search</section>
            <div class="bar">
                <a href={"http://integratedonlineedigitallibraryact.s3.amazonaws.com/"}> 
                <input class="searchbar" type="text" title="Search" placeholder="Search over 784393458 resources in ACT Library!"/>
                <img class="voice" alt ="google mic"  
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"}
                title={"Search by Voice"}/>
                </a>
            </div>
            <br/>
            
        </div>
    )
}
