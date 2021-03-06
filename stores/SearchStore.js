import { useStrict, action, observable, computed, runInAction } from "mobx"
import "isomorphic-fetch"
import moment from "moment"

useStrict(true)

// per the docs at
// https://github.com/zeit/next.js/tree/master/examples/with-mobx

let store = null

export default class SearchStore {
  @observable results = []
  @observable dropOff = this.today()
  @observable pickUp = this.tomorrow()
  @observable priceLow = 0
  @observable priceHigh = 150

  DATE_FORMAT = "YYYY-MM-DD"

  centerlat = "47.7993186"
  centerlng = "-122.3096406"

  today() {
    return moment(Date.now()).format(this.DATE_FORMAT)
  }

  tomorrow() {
    return moment(Date.now())
      .add(1, "d")
      .format(this.DATE_FORMAT)
  }

  @computed
  get areDatesValid() {
    const dateFormatRegEx = new RegExp(/^\d{4}-\d{2}-\d{2}$/)
    return dateFormatRegEx.test(this.dropOff) &&
      dateFormatRegEx.test(this.pickUp)
      ? true
      : false
  }

  @computed
  get arePricesValid() {
    return this.priceLow >= 0 &&
      this.priceLow <= 149 &&
      this.priceHigh >= 1 &&
      this.priceHigh <= 150
      ? true
      : false
  }

  @computed
  get computeQueryString() {
    let qs = {
      query: {
        start_date: this.dropOff,
        end_date: this.pickUp,
        minprice: this.priceLow,
        maxprice: this.priceHigh,
        centerlat: this.centerlat,
        centerlng: this.centerlng
      }
    }
    return qs
  }

  // these two functions could be refactored into a single function
  // along with a change to binding the handleChange function to pass in
  // 'type' parameter
  @action
  setPropertyValue(prop, val) {
    this[prop] = val
  }

  @action
  setDateValue(prop, val) {
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

    const roverAPIUrl =
      "https://www.rover.com/api/v3/search/overnight-boarding/"

    const res = await fetch(
      proxyUrl + roverAPIUrl + encodeQueryString(this.computeQueryString.query)
    )
    const json = await res.json()
    runInAction(() => {
      if (json.results) {
        this.results = json.results.sort(function(a, b) {
          return a.price - b.price
        })
      }
    })
  }
}

//TODO: needs testing...
export function encodeQueryString(params) {
  var pairs = []
  Object.keys(params).forEach(k => {
    pairs.push(`${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
  })
  return `?${pairs.join("&")}`
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
