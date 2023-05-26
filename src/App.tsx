import { useEffect, useState } from 'react'

import { getAllCharacters, ICharacter } from 'api'
import Character from 'components/Character'

function App() {
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState<Array<ICharacter>>([])

  const fetchCharacters = async () => {
    try {
      setLoading(true)
      const response = await getAllCharacters()
      setCharacters(response.data.results)
    } catch (error) {
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div className="bg-white">
      <h1 className="py-20 text-center text-8xl font-black ">
        The Rick and Morty API Testing
      </h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center bg-neutral-800 py-10 text-white">
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
