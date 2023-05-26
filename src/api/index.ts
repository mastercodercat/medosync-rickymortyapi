import axios from 'axios'

export interface ILocation {
  name: string
  url: string
}

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: ILocation
  image: string
  location: ILocation
  episode: string[]
  url: string
  created: string
}

interface IGetAllCharactersResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Array<ICharacter>
}

export const getAllCharacters = () =>
  axios.get<IGetAllCharactersResponse>(
    'https://rickandmortyapi.com/api/character'
  )
