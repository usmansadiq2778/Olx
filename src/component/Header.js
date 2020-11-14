import React, { Component } from 'react';
import Logo from '../component/images/160508206819011095 abbb.jpg';
import Bgimg from '../component/images/hero_bg_pk (1).jpg'
import {Link, Route} from 'react-router-dom'
// import {
//     BrowserRouter as Router,
//     Switch,
//     useLocation
//   } from "react-router-dom";



function Header() {

    const nav=[
        {iD:1, label: "Mobile Phones"},
        {iD:2, label: "Car"},
        {iD:3, label: "Motorcycles"},
        {iD:4, label: "Houses"},
        {iD:5, label: "TV-Video-Audio"},
        {iD:6, label: "Tablets"},
        {iD:7, label: "Land & Plots"},
        
    ]
    
        return (
            <React.Fragment>
            <div className="header fixed flex aic">
                <div className="logo"><img src ={Logo} /></div>
                
            <div className="location rel flex aic"> 
            <div className="icon-search ico s24" /> 
            <input className="label s15 font" value=' Pakistan' placeholder="Your Location" />
            <button className="icon-chevron-down arro s24" />
            </div>
            <div className="search flex aic">
                
                <input type="text" placeholder="Find cars, Mobile Phones and more..." className=" query font s15" />
                <button className="icon-search go s24  cfff"/> 
            </div>
            <div className="action flex aic">
                <Link to="account/signin " className="color b s16 noulh noul ">Login</Link>
                <button className="sell flex color aic" > 
                <div className="icon-plus ico s24" />
                <h2 className=" s18 fontb">SELL</h2>
                </button>
            </div>

            </div>

            <div className="hnav fixed flex aic">
   <button className="view-cates  flex aic  color " >
   <h2 className=" s18 fontb color">ALL CATEGORIES</h2>
   <button className="icon-chevron-down arro s24" />
   </button>

   {
       nav.map(item =>{
           return(
           <Link to={"/browser/" + item.iD} className="noul noulh color bl fontc s13 "> {item.label} </Link>
           )
       })
   }
              
            </div>
            <div className="hclr" />
            
            <div className="bg-main" >
                <img className="bg" src={Bgimg} />

            
            <div >

            </div>
            </div>
            </React.Fragment>
            
        );
    
}


export default Header;


