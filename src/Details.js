import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Details extends Component{
    
render(){
    return (
      <div className="details">
        <div>
            <h1>Github viewer</h1>
            <button className='button info'>Home</button>
            <hr />
        </div>
        <h1>{this.props.state.username} details</h1>
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
                        <td>{this.props.state.stars}</td>
                        <td>{this.props.state.forks}</td>
                        <td>{this.props.state.priLang}</td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
    }
}
Details.propTypes={
    state: PropTypes.object.isRequired
}

export default Details;
