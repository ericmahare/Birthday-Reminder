import React from 'react'

const Person = ({data}) => {
  const {name,age,image} = data;
  return (
    <React.Fragment>
      <div className='data-container'>
        <div className='img-container'>
          <img src= {image} alt={name}/>
        </div>
        <div className='data-info'>
          <span className='name'>{name}</span>
          <span>{age} years</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Person