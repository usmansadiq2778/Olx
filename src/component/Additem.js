// import { useState } from "react"
import React ,{useState} from 'react';
import Imgg from './images/image.webp'
import {Link} from 'react-router-dom'




function Additem(props){
    if("placeholder" in props){
        return(
            <div className="add-item">
                <div className="poster anim placeholder" >
                    
                    <img className="imgg" src={Imgg} /></div>
                <div className="title anim placeholder" />
                <div className="tagline anim placeholder" />

                <div className="ftr anim flex" > 
                <div className="location anim placeholder" />
                <div className="stamp anim placeholder" />
                </div>
                

            </div>
        )
    }


    return(
        <div className="add-item">
            
        </div>
    )
}
export default Additem;