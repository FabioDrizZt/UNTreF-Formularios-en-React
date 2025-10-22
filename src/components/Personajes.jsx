import { useEffect } from 'react'
import usePersonaje from '../hooks/usePersonaje'

export default function Personajes() {
  const [personaje, siguiente, anterior] = usePersonaje()

  return (
    <>
      <h1>Personaje</h1>
      <div className="personaje">
        <img src={personaje?.image} alt={personaje?.name} />
        <h2>{personaje?.name}</h2>
        <span >
          {(personaje?.status === 'Alive') ? '🟢' : '🔴'} {personaje?.status} - {personaje?.species}
        </span>
        <p>{personaje?.type}</p>
        <p>{personaje?.gender}</p>
        <p>{personaje?.origin?.name}</p>
        <p>{personaje?.location?.name}</p>
      </div >
      <button onClick={anterior}> &#8592;</button>
      <button onClick={siguiente}> &#8594;</button>
    </>
  )
}
