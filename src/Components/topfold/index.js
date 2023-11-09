import React, { useState } from "react";
import './topfold.css'
const TopFold=()=>{
    const [query, setQuery]=useState("");

    const handelQuery=(e)=>{
        setQuery(e.target.value)
        

    }
    return (
        <div className="topfold">
            {window.location.pathname ==='/' ? <div className="home-topfold">
                <div className="searchbar">
                <i class="fi fi-rr-search"></i>
                <input placeholder="search for expences" value={query} onChange={(e)=>handelQuery(e)}/>

                </div>
                <div className="add-button">
                <i class="fi fi-rr-add"></i>
                <label>Add</label>
                </div>
            </div> :<div className="add-topfold">
                <div className="add-topfold-button">
                <i class="fi fi-rr-angle-left"></i>
                <label>Back</label>
                </div>
                <div className="add-topfold-button">
                <i class="fi fi-rr-cross-circle"></i>
                <label>Cancel</label>
                </div>

            </div> }
            
            
        </div>
    );
}

export default TopFold;