SearchBox example:


```js
const React = require('react');
const { Provider } = require("mobx-react");
const { getOrCreateStore } = require("../../stores/SearchStore");

let searchStore = getOrCreateStore(true);
<Provider searchStore={searchStore}>
  <SearchBox />
</Provider>
```