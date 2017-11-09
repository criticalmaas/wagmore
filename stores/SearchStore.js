import { useStrict, action, observable, autorun, runInAction } from "mobx"
import "isomorphic-fetch"

useStrict(true)

// per the docs at
// https://github.com/zeit/next.js/tree/master/examples/with-mobx

let store = null

class SearchStore {
  @observable results = []
  @observable dropOff = Date.now()
  @observable pickUp = this.tomorrow()
  @observable priceLow = 0
  @observable priceHigh = 150

  centerlat = "47.7993186"
  centerlng = "-122.3096406"

  tomorrow() {
    let tomorrow = new Date()
    return tomorrow.setDate(tomorrow.getDate() + 1)
  }

  @action
  setPropertyValue(prop, val) {
    this[prop] = val
  }

  @action
  async fetch() {
    // eslint-disable-next-line no-undef

    let header = new Headers({
      "Access-Control-Allow-Origin": "*"
    })

    // using a proxy in production to get around CORS
    // Access-Control-Allow-Origin=* not being sent in OPTIONS response
    const proxyUrl =
      process.env.NODE_ENV === "production"
        ? "https://cors-anywhere.herokuapp.com/"
        : ""

    const roverAPIUrl = `https://www.rover.com/api/v3/search/overnight-boarding/?centerlat=${this
      .centerlat}&centerlng=${this.centerlng}`

    const res = await fetch(proxyUrl + roverAPIUrl, {
      method: "GET",
      headers: header,
      mode: "cors",
      cache: "default"
    })
    const json = await res.json()
    runInAction(() => {
      this.results = json.results
    })
  }

  disposable = autorun(() => {
    //console.log("in autorun - somethings changed", this.results)
  })
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
