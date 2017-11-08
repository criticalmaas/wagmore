import { action, observable } from "mobx"

let store = null

class SearchStore {
  @observable results = []

  constructor() {
    // add ctor stuff here
  }
}

export function getOrCreateStore(isServer) {
  if (isServer) {
    return new SearchStore()
  } else {
    if (store === null) {
      store = new SearchStore()
    }
    return store
  }
}
