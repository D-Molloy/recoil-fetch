import {
  atom,
  selector,
} from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'WOW', // default value (aka initial value)
});

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

/**
 * Fetch state below
 */

// how to refetch https://github.com/facebookexperimental/Recoil/issues/85 (OLD)
// NEW - https://github.com/facebookexperimental/Recoil/issues/1713
// docs - https://recoiljs.org/docs/guides/asynchronous-data-queries/#query-refresh

export const forceRefetchUsersTrigger = atom({
  key: "forceRefetchUsersTrigger",
  default: 0
});

const placeHolderSelector = selector({
  key: 'PlaceHolderSelector',
  get: async ({ get }) => {
    get(forceRefetchUsersTrigger)// 'register' forceRefetchUsersTrigger as a dependency
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data;
  },
});

export const nextUserIdState = selector({
  key: 'nextUserId',
  get: ({ get }) => {
    const users = get(placeholderState)
    return users.reduce((acc, curr) => curr.id > acc ? curr.id : acc, 0) + 1
  },
});


export const placeholderState = atom({
  key: "placeholderState",
  default: placeHolderSelector || []
});

