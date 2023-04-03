import {
  useRecoilValue,
} from 'recoil';
import { charCountState } from '../state';


export function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
