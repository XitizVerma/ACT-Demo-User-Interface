import React from 'react'
import './index.css';

export default function Cards({link, index, image, name , borrow , share }) {
    console.log(link);
    return (
        <div>
            <div class="gallery">
            <a target="_blank" rel="noreferrer"
            href={link}>
                <img src={image} alt="ML" width="30%" height="400"/>
            </a>
            <div class="desc">{name}</div>
            <div class="speed" onClick={()=>{borrow(index)}}>Borrow</div>
            <div class="speed2" onClick={()=>{share(link)}}>Share</div>
        
        </div>
        </div>
    )
}
