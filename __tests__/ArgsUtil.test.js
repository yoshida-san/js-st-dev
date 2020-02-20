const ArgsUtil = require('../src/ArgsUtil')

test('引数有効判定テスト', () => {
  describe('argsが[1]の時の引数有効判定がfalseであること', () => {
    const o = new ArgsUtil([1])
    expect(o.lengthCheck()).toBe(false)
  })
  describe('argsが[1, 2]の時の引数有効判定がfalseであること', () => {
    const o = new ArgsUtil([1, 2])
    expect(o.lengthCheck()).toBe(false)
  })
  describe('argsが[null, null, 1]の時の引数有効判定がtrueであること', () => {
    const o = new ArgsUtil([null, null, 1])
    expect(o.lengthCheck()).toBe(true)
  })
  describe('argsが[null, null, 1, 2]の時の引数有効判定がtrueであること', () => {
    const o = new ArgsUtil([null, null, 1, 2])
    expect(o.lengthCheck()).toBe(true)
  })
})

test('有効引数個数テスト', () => {
  describe('argsが[null, null, 1]の時の有効引数個数が2であること', () => {
    const o = new ArgsUtil([null, null, 1])
    expect(o.length()).toBe(1)
  })
  describe('argsが[null, null, 1, 2]の時の有効引数個数が2であること', () => {
    const o = new ArgsUtil([null, null, 1, 2])
    expect(o.length()).toBe(2)
  })
})
