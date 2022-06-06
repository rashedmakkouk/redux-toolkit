# Redux Toolkit

Opinionated toolset for efficient Redux development.

## Installation

Install package in your project.

```shell
# NPM
npm install @rashedmakkouk/redux-toolkit

# Yarn
yarn add @rashedmakkouk/redux-toolkit
```

## Usage

### Using ES6 module syntax

```javascript
import { module } from '@rashedmakkouk/redux-toolkit';

module();
```

### Using CommonJS syntax

```javascript
const { module } = require('@rashedmakkouk/redux-toolkit');

module();
```

## Definitions

For an abstract implementation, a more generic terminology is used.

| Param         | Required    | Description                                                       |
|---            |---          |---                                                                |
| `folder`      | Yes         | Refers to the slice name in the root Redux state object.          |
| `subFolder`   | No          | Refers to the sub slice name in the root Redux state object.      |

## Action Types

This package exports a handful of Action Types that you can use in your project.

- APPEND_RECORDS
- REMOVE_PROPS
- SET_PROPS
- UPDATE_PROPS
- UPDATE_PROPS_BY_KEY
- REMOVE_RECORDS_BY_KEY
- PURGE_STORE
- RESET_REDUCER
- RESET_STORE
- USER_AUTHENTICATED
- USER_UNAUTHENTICATED
- SIGN_IN
- SIGN_UP
- REFRESH_TOKEN
- INIT_APP
- STARTUP_APP
- SHUTDOWN_APP
- APP_READY
- NETWORK_CONNECTED
- NETWORK_DISCONNECTED
- NETWORK_ONLINE
- NETWORK_OFFLINE
- CONNECT_WEBSOCKET
- SEND_WEBSOCKET_MESSAGE

## Redux Store Setup

### Create a Redux Store

> app/store.js

Follow the instructions from [Create a Redux Store][redux-create-store] to configure your app's
root Redux Store; also see [configureStore][redux-configure-store].

### Create a Redux State Slice

> app/reducers/slice-name.reducer.js

The implementation described below introduces some complexity to your existing Action Creators and
[Slice Reducers][redux-core-concepts], make sure to check out [Caveats](#caveats) section and the
changes you need to apply to your app.

> app/reducers/posts.reducer.js

```javascript
// Set Store slice initial state data structure and values.
const initialState = {
  value: 0
};

// Create slice reducer function.
const postsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    ...

    default:
      return state;
  }
};

export default postsReducer;
```

### Add Slice Reducers to the Store

Follow these steps to [Add Slice Reducers to the Store][redux-add-slice-to-store].

### Provide the Redux Store

> index.js

Follow the instructions from [Provide the Redux Store to React][redux-store-provider] to connect
the Store to your React or React Native app.

### Restrict processing a dispatched action by Slice

This implementation makes use of the same Action Creator and dispatches the same Action Reducer in
all of the Redux Store slice reducers.

To process the dispatched actions only within the intended reducer function, add the following
condition to each of your slice reducers:

> app/reducers/posts.reducer.js

```javascript
const initialState = {
  value: 0
};

const postsReducer = (state = initialState, action) => {
  const { folder, type } = action;

  // Add this <--
  if (folder !== 'posts') {
    return state;
  }

  switch (type) {
    ...

    default:
      return state;
  }
};

export default postsReducer;
```

### Add Action Reducers to Redux Store Slice

You can add as many shared or explicit Action Reducers as needed.

```javascript
import { actionReducers, actionTypes } from '@rashedmakkouk/redux-toolkit';

// Import action reducers.
const { setProps, updateProps } = actionReducers;

// Import action types.
const { SET_PROPS, UPDATE_PROPS } = actionTypes;

const initialState = {
  value: 0
};

const postsReducer = (state = initialState, action) => {
  const { folder, type } = action;

  if (folder !== 'posts') {
    return state;
  }

  switch (type) {
    ...

    // Add Action Reducers as needed.
    case SET_PROPS:
      return setProps(state, action, initialState);

    case UPDATE_PROPS:
      return updateProps(state, action);

    default:
      return state;
  }
};

export default postsReducer;
```

### Use Action Creators in React Components

Action Creators can be triggered from anywhere in your app.

```javascript
import { actionCreators } from '@rashedmakkouk/redux-toolkit';

// Import Action Creators.
const { appendRecords } = actionCreators;

// In React Functional components, use dispatch hook.
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();

// In React Class components, use your configured app store.
import store from 'app/store.js';
const { dispatch } = store;

// Dispatch Action Creators in your app's components.
dispatch(
  appendRecords({
    folder: 'slice-name', // Root Redux store slice.
    payload: [ ... ], // Data to be processed.
    subFolder: 'sub-slice-name', // Optional: Root Redux store sub slice.
  })
);
```

## Action Creators

Commonly used Redux Store actions for processing payloads.

### `appendRecords` *(Array)*

Appends Array payload to the end of an existing array.

Use case:

- Slice Reducer data type: Array.
- Slice Reducer data type: Object, Sub Slice data type: Array.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `args.folder`       | string  | Yes         | -       | Slice name in the Store.                |
| `args.subFolder`    | string  | No          | -       | Sub slice name in the Store.            |
| `args.payload`      | Array   | Yes         | -       | Data array.                             |

#### Configuration

> app/reducers/notifications.reducer.js

```javascript
import { actionReducers, actionTypes } from '@rashedmakkouk/redux-toolkit';

const { appendRecords } = actionReducers;

const { APPEND_RECORDS } = actionTypes;

const initialState = [];

const notificationsReducer = (state = initialState, action) => {
  const { folder, type } = action;

  if (folder !== 'notifications') {
    return state;
  }

  switch (type) {
    ...

    case APPEND_RECORDS:
      return appendRecords(state, action);

    default:
      return state;
  }
};

export default notificationsReducer;
```

#### Example

```javascript
// Redux Store slice data.
notifications: [
  { uid: 1 }
]

// Component.
dispatch(
  appendRecords({
    folder: 'notifications',
    payload: [
      { uid: 2 },
      { uid: 3 }
    ]
  })
)

// Result.
notifications: [
  { uid: 1 },
  { uid: 2 },
  { uid: 3 }
]

```

### `removeRecordsByKey` *(Array)*

Removes Object records from Array by specified `key` with values matching supplied `payload`.

Use case:

- Slice Reducer data type: Array.
- Slice Reducer data type: Object, Sub Slice data type: Array.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `args.folder`       | string  | Yes         | -       | Slice name in the Store.                |
| `args.subFolder`    | string  | No          | -       | Sub slice name in the Store.            |
| `args.key`          | Array   | Yes         | -       | Object property to filter by.           |
| `args.payload`      | Array\<string> \| Array\<number> | Yes         | -         | List of values to filter by. |

#### Configuration

> app/reducers/posts.reducer.js

```javascript
import { actionReducers, actionTypes } from '@rashedmakkouk/redux-toolkit';

const { removeRecordsByKey } = actionReducers;

const { REMOVE_RECORDS_BY_KEY } = actionTypes;

const initialState = {};

const postsReducer = (state = initialState, action) => {
  const { folder, type } = action;

  if (folder !== 'posts') {
    return state;
  }

  switch (type) {
    ...

    case REMOVE_RECORDS_BY_KEY:
      return removeRecordsByKey(state, action);

    default:
      return state;
  }
};

export default postsReducer;
```

#### Example

```javascript
// Redux Store slice data.
posts: {
  1: { id: 1 },
  2: { id: 2 },
  3: { id: 3 }
}

// Component.
dispatch(
  removeRecordsByKey({
    folder: 'posts',
    key: 'id',
    payload: [ 1, 2 ]
  })
)

// Result.
posts: {
  1: { id: 3 }
}
```

### `setProps` *(Object)*

Resets Store slice to initial state and updates object properties with supplied key/value pairs
payload.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `args.folder`       | string  | Yes         | -       | Slice name in the Store.                |
| `args.subFolder`    | string  | No          | -       | Sub slice name in the Store.            |
| `args.payload`      | object  | Yes         | -       | Object key/value pairs to set.          |

#### Configuration

> app/reducers/network.reducer.js

```javascript
import { actionReducers, actionTypes } from '@rashedmakkouk/redux-toolkit';

const { setProps } = actionReducers;

const { SET_PROPS } = actionTypes;

const initialState = {
  isConnected: undefined,
  connectionType: undefined,
  secure: undefined
};

const networkReducer = (state = initialState, action) => {
  const { folder, type } = action;

  if (folder !== 'network') {
    return state;
  }

  switch (type) {
    ...

    case SET_PROPS:
      return setProps(state, action, initialState);

    default:
      return state;
  }
};

export default networkReducer;
```

#### Example

```javascript
// Redux Store slice data.
network: {
  isConnected: false,
  connectionType: 'WiFi',
  secure: false
}

// Component.
dispatch(
  setProps({
    folder: 'network',
    payload: {
      isConnected: true,
      connectionType: '4G'
    }
  })
)

// Result.
network: {
  isConnected: true,
  connectionType: '4G',
  secure: undefined
}
```

### `updateProps` *(Object)*

Updates object key/value pairs with supplied payload.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `args.folder`       | string  | Yes         | -       | Slice name in the Store.                |
| `args.subFolder`    | string  | No          | -       | Sub slice name in the Store.            |
| `args.payload`      | object  | Yes         | -       | Object key/value pairs to update.       |

#### Configuration

> app/reducers/config.reducer.js

```javascript
import { actionReducers, actionTypes } from '@rashedmakkouk/redux-toolkit';

const { updateProps } = actionReducers;

const { UPDATE_PROPS } = actionTypes;

const initialState = {
  network: {
    isConnected: undefined,
    connectionType: undefined,
    secure: undefined
  }
};

const configReducer = (state = initialState, action) => {
  const { folder, type } = action;

  if (folder !== 'config') {
    return state;
  }

  switch (type) {
    ...

    case UPDATE_PROPS:
      return updateProps(state, action);

    default:
      return state;
  }
};

export default configReducer;
```

#### Example

```javascript
// Redux Store slice data.
config: {
  network: {
    isConnected: false,
    connectionType: 'WiFi',
    secure: false
  }
}

// Component.
dispatch(
  updateProps({
    folder: 'config',
    subFolder: 'network',
    payload: {
      isConnected: true,
      connectionType: '4G'
    }
  })
)

// Result.
config: {
  network: {
    isConnected: true,
    connectionType: '4G',
    secure: false
  }
}
```

### `removeProps` *(Object)*

Removes object properties by supplied `key(s)` payload.

Use case:

- Object properties.
- Normalized Object records.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `args.folder`       | string  | Yes         | -       | Slice name in the Store.                |
| `args.subFolder`    | string  | No          | -       | Sub slice name in the Store.            |
| `args.payload`      | string \| Array\<string>  | Yes         | -       | List of object property names to remove. |

#### Configuration

> app/reducers/temp.reducer.js

```javascript
import { actionReducers, actionTypes } from '@rashedmakkouk/redux-toolkit';

const { removeProps } = actionReducers;

const { REMOVE_PROPS } = actionTypes;

const initialState = {};

const tempReducer = (state = initialState, action) => {
  const { folder, type } = action;

  if (folder !== 'temp') {
    return state;
  }

  switch (type) {
    ...

    case REMOVE_PROPS:
      return removeProps(state, action);

    default:
      return state;
  }
};

export default tempReducer;
```

#### Example

```javascript
// Redux Store slice data.
temp: {
  1: { id: 1 },
  2: { id: 2 },
  uid: "abc",
}

// Component.
dispatch(
  removeProps({
    folder: 'temp',
    payload: [ 2, 'uid' ]
  })
)

// Result.
temp: {
  1: { id: 1 }
}
```

### `updatePropsByKey` *(Object)*

Iterates over normalized data structures by `key`, updates object properties if
exists, else adds a new record.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `args.folder`       | string  | Yes         | -       | Slice name in the Store.                |
| `args.subFolder`    | string  | No          | -       | Sub slice name in the Store.            |
| `args.payload`      | object  | Yes         | -       | Store slice initial state.              |

#### Configuration

> app/reducers/posts.reducer.js

```javascript
import { actionReducers, actionTypes } from '@rashedmakkouk/redux-toolkit';

const { updatePropsByKey } = actionReducers;

const { UPDATE_PROPS_BY_KEY } = actionTypes;

const initialState = {};

const postsReducer = (state = initialState, action) => {
  const { folder, type } = action;

  if (folder !== 'posts') {
    return state;
  }

  switch (type) {
    ...

    case UPDATE_PROPS_BY_KEY:
      return updatePropsByKey(state, action);

    default:
      return state;
  }
};

export default postsReducer;
```

#### Example

```javascript
// Redux Store slice data.
posts: {
  1: { id: 1, title: 'Post #1', category: 'category-1' },
  2: { id: 2, title: 'Post #2', category: 'category-2' }
}

// Component.
dispatch(
  updatePropsByKey({
    folder: 'posts',
    payload: {
      2: { id: 2, title: 'Post #2.1' }
      3: { id: 3, title: 'Post #3', category: 'category-3' }
    }
  })
)

// Result.
posts: {
  1: { id: 1, title: 'Post #1', category: 'category-1' },
  2: { id: 2, title: 'Post #2.1', category: 'category-2' },
  3: { id: 3, title: 'Post #3', category: 'category-3' }
}
```

### `resetReducer`

Resets Store slice to initial state and default values.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `args.folder`       | string  | Yes         | -       | Slice name in the Store.                |

#### Configuration

> app/reducers/network.reducer.js

```javascript
import { actionReducers, actionTypes } from '@rashedmakkouk/redux-toolkit';

const { resetReducer } = actionReducers;

const { RESET_REDUCER } = actionTypes;

const initialState = {
  isConnected: undefined,
  connectionType: undefined,
  secure: undefined
};

const networkReducer = (state = initialState, action) => {
  const { folder, type } = action;

  if (folder !== 'network') {
    return state;
  }

  switch (type) {
    ...

    case RESET_REDUCER:
      return resetReducer(initialState);

    default:
      return state;
  }
};

export default networkReducer;
```

#### Example

```javascript
// Redux Store slice data.
network: {
  isConnected: true,
  connectionType: 'WiFi',
  secure: true
}

// Component.
dispatch(
  resetReducer({ folder: 'network' })
)

// Result.
network: {
  isConnected: undefined,
  connectionType: undefined,
  secure: undefined
}
```

### `resetStore`

Dispatches action to reset and/or purge Store state.

#### Parameters

| Param               | Type    | Required    | Default | Description                             |
|---                  |---      |---          |---      |---                                      |
| `purge`             | boolean | No          | false   | If true, returns `PURGE_STORE` instead of the default `RESET_STORE` action type. |

#### Configuration

> app/reducers/index.js

Update your Redux Root Reducer function to listen to dispatched reset action:

```javascript
import { actionTypes } from '@rashedmakkouk/redux-toolkit';

import postsReducer from './posts.reducer.js'

const { PURGE_STORE, RESET_STORE } = actionTypes;

const appReducer = combineReducers({
  // List of your app reducer functions.
  ...
  posts: postsReducer,
});

const rootReducer = (state, action) => {
  // Listen to specified action types to clear Store state.
  if (action.type === RESET_STORE || action.type === PURGE_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
```

#### Example

```javascript
// Component.
dispatch(
  resetStore(true)
)
```

> The `reducer` parameter passed to [configureStore](#create-a-redux-store) function supports
> composed slice reducers using [combineReducers][redux-combine-reducers] function.

#### redux-persist

If you are using [redux-persist][redux-persist-npm], you can use this Action Creator with the
argument **purge** set to `true` to trigger the built-in Action Type used to clear persisted Redux
Store state in local storage.

## Caveats

### Using shared Action Creators

When using shared [Action Creators](#methods) across multiple reducers, the payload will get
processed in every reducer that has the action configured. See
[Restrict processing a dispatched action](#restrict-processing-a-dispatched-action) for required
configuration.

### Adding custom properties to Action Creators

Refactor your Action Creators to include two new properties: `folder` and `subFolder`. See
[Definitions](#definitions) section for details.

This allows for handling which dispatched actions being processed in which slice reducer.

## Changelog

Check the [Changelog][changelog] for a detailed list of new features and changes.

## Community

Head over to [Discussions][discussions] where you can ask questions, request new features or voice
your ideas and suggestions.

- [`Ideas`][discussions-ideas]
- [`Q&A`][discussions-q-a]

## License

This package is available under the [MIT license][mit-license]. It also includes external libraries
that are available under a variety of licenses. See [LICENSE][mit-license-repo] for the full
license text.

[discussions]: https://github.com/rashedmakkouk/redux-toolkit/discussions
[discussions-ideas]: https://github.com/rashedmakkouk/redux-toolkit/discussions/categories/ideas
[discussions-q-a]: https://github.com/rashedmakkouk/redux-toolkit/discussions/categories/q-a
[issues]: https://github.com/rashedmakkouk/redux-toolkit/issues
[mit-license]:https://opensource.org/licenses/MIT
[mit-license-repo]: https://github.com/rashedmakkouk/redux-toolkit/blob/main/LICENSE
[changelog]: https://github.com/rashedmakkouk/redux-toolkit/blob/main/CHANGELOG.md
[redux-configure-store]: https://redux-toolkit.js.org/api/configureStore
[redux-create-store]: https://redux.js.org/tutorials/quick-start#create-a-redux-store
[redux-store-provider]: https://redux.js.org/tutorials/quick-start#provide-the-redux-store-to-react
[redux-core-concepts]: https://redux.js.org/introduction/core-concepts
[redux-add-slice-to-store]: https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store
[redux-persist-npm]: https://www.npmjs.com/package/redux-persist
[redux-combine-reducers]: https://redux-toolkit.js.org/api/other-exports#combinereducers
