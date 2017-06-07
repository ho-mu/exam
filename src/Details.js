import React, { Component } from 'react';

const Details = ()=>{
  
    return (
      <div className="details">
        <h1>hello_dojo details</h1>
        <table className='table sticky' role='grid'>
                <thead>
                    <tr>
                        <th>Stars</th>
                        <th>Forks</th>
                        <th>Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>32</td>
                        <td>6</td>
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>6</td>
                        <td>JavaScript</td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
  
}

export default Details;
