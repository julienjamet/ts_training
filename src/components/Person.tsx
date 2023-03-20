import { ChangeEvent, FC, useState } from 'react'
import { User } from '../Interfaces'

export const Person: FC<User> = ({ age, email, eyesColor }) => {

  const [country, setCountry] = useState<string>("")

  type NameType = "Julien" | "Marie" | "Mocca"
  const newName: NameType = "Julien"

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  return (
    <div>
      <h1> {newName} </h1>
      <h1> {age} ans </h1>
      <h1> {email} </h1>
      <input type="text" placeholder="Pays de résidence" onChange={handleChange} />
      <h2> {country} </h2>
      <h2> {eyesColor} </h2>
    </div>
  )
}