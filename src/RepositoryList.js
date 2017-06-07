import React, { Component } from 'react';
import './repository_list.css'

const RepositoryList = ()=>{
  
    return (
      <div className="repository_list">
        <span className='loading-indicator small'></span>
        <div>
            <h2>holly's repositories</h2>
            
            <div className='row'>
                <div className='large-4 columns'>
                    <label>Filter repos by primary language</label>
                    <select name="filter" id="filter">
                        <option value="All" selected='true'>All</option><option value="All" selected='true'>JavaScript</option>
                        <option value="JavaScript" selected='true'>HTML</option>
                        <option value="Ruby" selected='true'>Ruby</option>
                    </select>
                </div>
            </div>
            <table className='table sticky' role='grid'>
                <thead>
                    <tr><th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=''><td>repo-1</td></tr>
                    <tr><td>repo-2</td></tr>
                    <tr><td>repo-3</td></tr>
                </tbody>
            </table>
        </div>
      </div>
    );
  
}

export default RepositoryList;
