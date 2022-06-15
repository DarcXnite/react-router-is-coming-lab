import React from 'react'
import { useParams } from 'react-router-dom'

export default function Member({ gameOfThrones }) {
  const { houseId, memberId } = useParams()
  const house = gameOfThrones.find(house => house.id.toString() === houseId)
  const member = house.people.find(member => member.id.toString() === memberId)

  if (!member) return <h3>No Member!</h3>

  const { name, description, wikiSuffix } = member

  return (
    <div className='page'>
      <div className='header'>
        <h2>
          <span>
            <a
              href={`https://awoiaf.westeros.org/index.php/${wikiSuffix}`}
              target='_blank'
            >
              {name}
            </a>
          </span>
        </h2>
      </div>
      <div className='desc'>{description}</div>
    </div>
  )
}
