import React, { Component } from 'react';
import './repository_list.css'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class RepositoryList extends Component{
     filter=(e)=>{
        this.props.filter(e.target.value)
    }

    showDetails=(e)=>{
        this.props.showDetails(e.target.id)
    }

    render(){
    
    let style={}
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
    if(this.props.state.filteredRepos.length !== 0){
        this.props.state.filteredRepos.forEach((val, id)=>{
        repoList.push(<tr key={val.id} ><td id={val.name} onClick={this.showDetails} >{val.name}</td></tr>)
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
                        <option value="JavaScript" >JavaScript</option>
                        <option value="HTML" >HTML</option>
                        <option value="Ruby" >Ruby</option>
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
    filter: PropTypes.func.isRequired,
    showDetails: PropTypes.func.isRequired
}

export default RepositoryList;
