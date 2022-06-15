import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function House({ gameOfThrones }) {
  let { id } = useParams()
  const house = gameOfThrones.find(house => house.id.toString() === id)

  console.log(house)

  const members = house.people.map(member => {
    const { id, name } = member
    return (
      <li key={name}>
        <Link to={`/houses/${house.id}/members/${id}`}>{name}</Link>
      </li>
    )
  })

  if (!members) return <h2>No house!</h2>
  return (
    <div className='page'>
      <div className='header'>
        <h2>Members of a GoT House</h2>
      </div>
      <ul className='list'>{members}</ul>
    </div>
  )
}
