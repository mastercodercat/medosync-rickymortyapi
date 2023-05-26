import { ICharacter } from 'api'

interface ICharacterProps {
  character: ICharacter
}

const Character = ({ character }: ICharacterProps) => {
  return (
    <div className="w-full max-w-[600px] p-6 xl:w-6/12 2xl:w-4/12">
      <div className="flex rounded-xl bg-zinc-600">
        <img
          src={character.image}
          alt={character.name}
          className="w-[220px] rounded-s-xl"
        />
        <div className="p-4">
          <a
            href={`https://rickandmortyapi.com/api/character/${character.id}`}
            target="_blank"
            className="cursor-pointer text-2xl font-extrabold hover:text-amber-400"
            rel="noreferrer"
          >
            {character.name}
          </a>
          <div className="flex items-center">
            <div
              className={`mr-2 inline-block h-3 rounded-full pr-3 ${
                character.status === 'Alive' ? 'bg-green-500' : 'bg-red-600'
              }`}
            ></div>
            <div className="font-bold">
              {character.status} - {character.species}
            </div>
          </div>
          <div className="mt-6 text-gray-400">Last known location:</div>
          <a
            href={character.location.url}
            target="_blank"
            className="text-xl hover:text-amber-400"
            rel="noreferrer"
          >
            {character.location.name}
          </a>
          <div className="mt-6 text-gray-400">First seen in:</div>
          <a
            href={character.origin.url}
            target="_blank"
            className="text-xl hover:text-amber-400"
            rel="noreferrer"
          >
            {character.origin.name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Character
