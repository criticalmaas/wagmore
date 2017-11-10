import SearchStore from "./SearchStore"
import moment from "moment"

let store = new SearchStore()
const DATE_FORMAT = "YYYY-MM-DD"

describe("SearchStore", () => {
  it("exists", () => {
    expect(store).toBeDefined()
  })
  it("dropOff to be set correctly to today", () => {
    let now = moment(Date.now()).format(DATE_FORMAT)
    expect(store.dropOff).toEqual(now)
  })
})

describe("today() and tomorrow()", () => {
  const dateFormatRegEx = new RegExp(/^\d{4}-\d{2}-\d{2}$/)
  it("today: returns time now in YYYY-MM-DD format", () => {
    let now = moment(Date.now()).format(DATE_FORMAT)
    expect(store.today()).toEqual(now)
    expect(dateFormatRegEx.test(store.today())).toBe(true)
  })

  it("tomorrow() returns time now in YYYY-MM-DD format", () => {
    let now = moment(Date.now())
      .add(1, "d")
      .format(DATE_FORMAT)
    expect(store.tomorrow()).toEqual(now)
    expect(dateFormatRegEx.test(store.tomorrow())).toBe(true)
  })
})

describe("computed: areDatesValid", () => {
  it("returns true when date is a valid date", () => {
    store.dropOff = "2017-11-09"
    store.pickUp = "2017-11-10"
    expect(store.areDatesValid).toBe(true)
  })
  it("returns false when date is an invalid date", () => {
    store.dropOff = "2017-11-"
    store.pickUp = "2017-11-10"
    expect(store.areDatesValid).toBe(false)

    store.dropOff = "2017-11-09"
    store.pickUp = "2017-11-1"
    expect(store.areDatesValid).toBe(false)
  })
})

describe("computed: arePricesValid", () => {
  it("returns true when price is valid", () => {
    store.priceLow = 0
    store.pickHigh = 150
    expect(store.arePricesValid).toBe(true)
  })
  it("returns false when price is invalid", () => {
    store.priceLow = -1
    store.priceHigh = 150
    expect(store.arePricesValid).toBe(false)

    store.priceLow = 150
    store.pickhigh = 150
    expect(store.areDatesValid).toBe(false)

    store.priceLow = 0
    store.priceHigh = 0
    expect(store.arePricesValid).toBe(false)

    store.priceLow = 0
    store.pickhigh = 151
    expect(store.areDatesValid).toBe(false)
  })
})

describe("computed: computeQueryString", () => {
  it("returns valid querystring", () => {
    expect(store.computeQueryString).toEqual({
      query: {
        start_date: store.dropOff,
        end_date: store.pickUp,
        minprice: store.priceLow,
        maxprice: store.priceHigh,
        centerlat: store.centerlat,
        centerlng: store.centerlng
      }
    })
  })
})
