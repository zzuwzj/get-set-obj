const GetSetObj = require("../lib/index.js")
const { safeGet } = GetSetObj

describe("test a.b.c", () => {
  test("test null", () => {
    const obj = null
    expect(safeGet(obj, "a.b.c")).toBe(undefined)
  })
})

describe("test a.b.c", () => {
  test("test undefined", () => {
    const obj = undefined
    expect(safeGet(obj, "a.b.c")).toBe(undefined)
  })
})

describe("test a", () => {
  test("test {a: {b: {c: 1}}}", () => {
    const obj = { a: { b: { c: 1 } } }
    expect(safeGet(obj, "a")).toEqual({b: {c: 1}})
  })
})

describe("test a.b", () => {
    test("test {a: {b: {c: 1}}}", () => {
      const obj = { a: { b: { c: 1 } } }
      expect(safeGet(obj, "a.b")).toEqual({c: 1})
    })
  })

describe("test a.b.c", () => {
    test("test {a: {b: {c: 1}}}", () => {
      const obj = { a: { b: { c: 1 } } }
      expect(safeGet(obj, "a.b.c")).toBe(1)
    })
  })
