import React, { Component } from 'react';
import './search_form.css'
import PropTypes from 'prop-types'

class SearchForm extends Component{
    

    updateUN=(e)=>{
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

        let disp

        if(this.props.state.showDetails === false){
            disp=(  
                <div>
                        <label>Search repositories by username</label>
                         <input type="text" placeholder='username' value={this.props.state.username} onChange={this.updateUN} />
                        <button className='button expand' onClick={this.fetchRepos}>Search</button>
                    </div>)
        }else{
            disp=(<div></div>)
        }

    return (
        
            <div className="row">
                <div className='large-4 columns'>
                    {errMessage}
                    <div>
                        {disp}
                    </div>
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
