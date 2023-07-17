const fun = require("../lib").sumDigits
const recursiveSum = require("../lib").sumDigitsRecursively

const NAN_ERROR = new Error("Not a valid number")
const INFINITY_ERROR = new Error("Infinity not supported")

describe('sumDigitsRecursively', () => {
  it("sums positive number correctly", () => {
    expect(recursiveSum(10000)).toBe(1)
    expect(recursiveSum(156)).toBe(3)
    expect(recursiveSum(1999999)).toBe(1)
  })

  it("accepts strings", () => {
    expect(recursiveSum("10000")).toBe(1)
    expect(recursiveSum("156")).toBe(3)
    expect(recursiveSum("1999999")).toBe(1)
  })

  it("returns zero for zero", () => {
    expect(recursiveSum(0)).toBe(0)
  })

  it("show an error if the value is not convertible to a valid number", () => {
    expect(() => recursiveSum("xxxx")).toThrow(NAN_ERROR)
    expect(() => recursiveSum({})).toThrow(NAN_ERROR)
    expect(() => recursiveSum(new Date())).not.toThrow()
    expect(() => recursiveSum("0")).not.toThrow()
  })

  it("sums negative numbers correctly", () => {
    expect(recursiveSum(-500)).toBe(5)
    expect(recursiveSum(-555)).toBe(6)
    expect(recursiveSum(-15698)).toBe(2)
  })

  it("should reject infinity with an error", () => {
    expect(() => recursiveSum(Infinity)).toThrow(INFINITY_ERROR)
  })
})

describe('sumDigits', () => {
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
