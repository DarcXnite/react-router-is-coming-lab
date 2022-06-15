import React from 'react'
import { Link } from 'react-router-dom'

export default function Houses({ gameOfThrones }) {
  const houses = gameOfThrones.map(house => {
    const { id, name } = house
    return (
      <li key={name}>
        <Link to={`/houses/${id}`}>{name}</Link>
      </li>
    )
  })
  return (
    <div>
      <div className='header'>
        <h2>Game of Thrones Houses</h2>
      </div>
      <ul className='list'>{houses}</ul>
    </div>
  )
}
