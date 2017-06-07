import React from 'react';
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom';

const Details =(props)=>{
    

    return (
      <div className="details">
        <div>
            <h1>Github viewer</h1>
            <Link to='/'><button  onClick={props.reset} className='button info'>Home</button></Link>
            <hr />
        </div>
        <h1>{props.state.username} details</h1>
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
                        <td>{props.state.stars}</td>
                        <td>{props.state.forks}</td>
                        <td>{props.state.priLang}</td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
    }

Details.propTypes={
    state: PropTypes.object.isRequired,
    reset: PropTypes.func.isRequired
}

export default Details;
