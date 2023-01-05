import React from 'react'
import './Category.css';

const Category = ({ label }) => {
  return (
    <p className='label'>{label}</p>
  )
}

export default Category