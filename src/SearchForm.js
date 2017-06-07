import React, { Component } from 'react';
import './search_form.css'
import PropTypes from 'prop-types'

class SearchForm extends Component{
    

    updateUN=(e)=>{
        console.log(e.target.value)
        this.props.updateUN(e.target.value)
    }
    fetchRepos=(e)=>{
        e.preventDefault();
        this.props.fetchRepos();
    }
    
    render(){
        let errMessage
        if(this.props.state.searchSuccess === false){
            errMessage=<div className='notification-box alert'>Unknown username!</div>
        }

    return (
        
            <div className="row">
                <div className='large-4 columns'>
                    {errMessage}
                    <label>Search repositories by username</label>
                    <input type="text" placeholder='username' value={this.props.state.username} onChange={this.updateUN} />
                    <button className='button expand' onClick={this.fetchRepos}>Search</button>
                    <hr />
                </div>
            </div>
        
    );
    }//render
}

SearchForm.propTypes={
    state: PropTypes.object.isRequired,
    updateUN: PropTypes.func.isRequired,
    fetchRepos: PropTypes.func.isRequired
}

export default SearchForm;
