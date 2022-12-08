import React from 'react';
import PropTypes from 'prop-types';

export default function StaffCard(props) {
  return (
    // <div>
    //   Hi, I am {props.name}<br/>
    //   I am a {props.age} years old {props.role}
    // </div>
    <div className='about-staff'>
      {/* President */}
      {/* <img /> */}
      <div className='about-staff-img'></div>
      <div className='about-staff-context'>
        {/* Name and Status */}
        <h3>{props.name}</h3>
        <h4>{props.status}</h4>
        {/* Class and Major */}
        <div>
          <p>{props.major}</p>
          <p>{props.gradDate}</p>
        </div>
      </div>
    </div>
  )
}

StaffCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  gradDate: PropTypes.string.isRequired
};