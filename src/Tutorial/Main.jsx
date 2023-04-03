import React from 'react'
import {
  useRecoilState
} from 'recoil';
import { CharacterCount } from './CharacterCount';
import { textState } from '../state';


export default function Main() {
  const [text, setText] = useRecoilState(textState);
  return (
    <div>
      <h1>{text}</h1>
      <CharacterCount />
      <br></br>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

    </div>
  )
}