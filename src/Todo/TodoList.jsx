import React from 'react'
import {
  useRecoilValue,
} from 'recoil';

import { placeholderState } from '../state';

export default function TodoList() {
  const placeholderUsers = useRecoilValue(placeholderState)

  return (
    <div style={{
      width: '100vw',
      borderTop: "1px dashed white",
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: ' center',
      flexWrap: 'wrap'
    }}>
      {placeholderUsers.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid white",
            margin: 10,
            padding: 10
          }}
        >
          <strong>{user.name} - {user.id}</strong>
          <p>{user.email}</p>
        </div>
      ))}

    </div>
  )
}
