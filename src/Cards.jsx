import React, {useState, useEffect, Component} from "react";
import axios from 'axios';
import EditProfile from './EditProfile';

const Card = (props) => {

    
    return(
        <>
        <div className="cards">
            <div className="card">
            <img src={props.imgsrc} alt="firstuser" className="card_img" />
            <div className="card_info">
            <span className="card_category">{props.username}</span>
            <h5 className="card_title">{props.email}</h5>
            <h5 className="card_title">{props.phone}</h5>
            <h5 className="card_title">{props.website}</h5>
            <EditProfile
                username={props.username}
                email={props.email}
                phone={props.phone}
                website={props.website}
                clicked={props.buttonClickedHandler}
            />
            {/* <button className="button" onClick={EditProfile.props.handleClick}> Edit </button> */}
            </div>
            </div>
        </div>
        </>
)};
    

export default Card;