import React, { Component } from 'react';
import './search_form.css'

const SearchForm = ()=>{
  
    return (
      <div className="row">
        <div className='large-4 columns'>
            <div className='notification-box alert'>Unknown username!</div>
            <label>Search repositories by username</label>
            <input type="text" placeholder='username'/>
            <button className='button expand'>Search</button>
            <hr />
        </div>
      </div>
    );
  
}

export default SearchForm;
