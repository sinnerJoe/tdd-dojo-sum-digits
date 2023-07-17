const fun = require("../lib").sumDigits

const NAN_ERROR = new Error("Not a valid number")
const INFINITY_ERROR = new Error("Infinity not supported")

describe('Sum the digits test', () => {
  it("sums positive number correctly", () => {
    expect(fun(10000)).toBe(1)
    expect(fun(156)).toBe(12)
    expect(fun(1999999)).toBe(55)
  })

  it("accepts strings", () => {
    expect(fun("10000")).toBe(1)
    expect(fun("156")).toBe(12)
    expect(fun("1999999")).toBe(55)
  })

  it("returns zero for zero", () => {
    expect(fun(0)).toBe(0)
  })

  it("show an error if the value is not convertible to a valid number", () => {
    expect(() => fun("xxxx")).toThrow(NAN_ERROR)
    expect(() => fun({})).toThrow(NAN_ERROR)
    expect(() => fun(new Date())).not.toThrow()
    expect(() => fun("0")).not.toThrow()
  })

  it("sums negative numbers correctly", () => {
    expect(fun(-500)).toBe(5)
    expect(fun(-555)).toBe(15)
    expect(fun(-15698)).toBe(29)
  })

  it("should reject infinity with an error", () => {
    expect(() => fun(Infinity)).toThrow(INFINITY_ERROR)
  })
})
