import React, { Component } from 'react';
import './repository_list.css'
import PropTypes from 'prop-types'
import { Link, BrowserRouter as Router } from 'react-router-dom';

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
        repoList.push(<Link to={`/repos/${val.name}`}><p id={val.name} onClick={this.showDetails} >{val.name}</p></Link>)
    })
    }
    
    let languages=[]
    this.props.state.filteredRepos.forEach(({language})=>{
        languages[language]=language;
    })
   languages.forEach((val,ind)=>{
        options.push( <option value={Object.keys(val)} selected='true'>{Object.keys(val)}</option>)
   })

   let options=Object.keys(languages)
   let optionsDisp=[]
    for(let x=0; x<options.length; x++){
        optionsDisp.push(<option value={options[x]} >{options[x]}</option>)
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
                        {optionsDisp}
                    </select>
                </div>
            </div>
            <table className='table sticky' role='grid'>
                <thead>
                    <tr><th>Name</th>
                    </tr>
                </thead>
                <tbody>
                  <tr><td>
                        {repoList}
                        </td>
                   </tr>
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
