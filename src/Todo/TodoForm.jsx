import React, { useState } from 'react'
import {
  useRecoilValue,
  useRecoilState,
  useResetRecoilState,
  useSetRecoilState
} from 'recoil'
import {
  nextUserIdState,
  placeholderState,
  forceRefetchUsersTrigger
} from '../state'

export default function TodoForm() {
  const nextUserId = useRecoilValue(nextUserIdState)
  const [users, setUsers] = useRecoilState(placeholderState)
  const resetList = useResetRecoilState(placeholderState);
  const refreshUsers = useSetRecoilState(forceRefetchUsersTrigger)

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })

  const handleAddUser = () => {
    setUsers([{ ...formData, id: nextUserId, }, ...users])
  }

  return (
    <div>
      <label htmlFor='name'>
        Name:
        <input
          id='name'
          value={formData.name}
          onChange={(e) => setFormData({
            ...formData,
            name: e.target.value
          })}
        />
      </label>
      <br></br>
      <label htmlFor='email'>
        email:
        <input
          id='email'
          value={formData.email}
          onChange={(e) => setFormData({
            ...formData,
            email: e.target.value
          })}
        />
      </label>
      <br></br>
      <button onClick={handleAddUser}>Add new user</button>
      <button onClick={resetList}>Reset users</button>
      <button onClick={() => refreshUsers((n) => n + 1)}>Refetch users</button>

    </div>
  )
}
