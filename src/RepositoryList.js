import React, { Component } from 'react';
import './repository_list.css'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class RepositoryList extends Component{
     filter=(e)=>{
        console.log(e.target.value)
        this.props.filter(e.target.value)
    }
    render(){
    
    let style={}
    console.log(`inrepolist`)
    if(this.props.state.searching===false){
        style={
            display:'none'
        }
    }else{
        style={
            display:'true'
        }
    }

    let repoList = []
    if(this.props.state.filteredRepos.length != 0){
        this.props.state.filteredRepos.forEach((val, id)=>{
        repoList.push(<tr key={id}><td>{val.name}</td></tr>)
    })
    }
    
   

    return (
      <div className="repository_list">
        <span style={style} className='loading-indicator small'></span>
        <div>
            <h2>{this.props.state.username}'s repositories</h2>
            
            <div className='row'>
                <div className='large-4 columns'>
                    <label>Filter repos by primary language</label>
                    <select name="filter" id="filter" onChange={this.filter} >
                        <option value="All" selected='true'>All</option>
                        <option value="JavaScript" selected='true'>JavaScript</option>
                        <option value="HTML" selected='true'>HTML</option>
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
                    {repoList}
                </tbody>
            </table>
        </div>
      </div>
    );
    }//end of render 
}

RepositoryList.propTypes={
    state: PropTypes.object.isRequired,
    filter: PropTypes.func.isRequired
}

export default RepositoryList;
