const ArgsUtil = require('../src/ArgsUtil')

describe('引数有効判定テスト', () => {
  it('argsが[1]の時の引数有効判定がfalseであること', () => {
    process.argv = ['1']
    expect(new ArgsUtil().lengthCheck()).toBe(false)
  })
  it('argsが[1, 2]の時の引数有効判定がfalseであること', () => {
    process.argv = ['1', '2']
    expect(new ArgsUtil().lengthCheck()).toBe(false)
  })
  it('argsが[null, null, 1]の時の引数有効判定がtrueであること', () => {
    process.argv = [null, null, '1']
    expect(new ArgsUtil().lengthCheck()).toBe(true)
  })
  it('argsが[null, null, 1, 2]の時の引数有効判定がtrueであること', () => {
    process.argv = [null, null, '1', '2']
    expect(new ArgsUtil().lengthCheck()).toBe(true)
  })
})

describe('有効引数個数テスト', () => {
  it('argsが[null, null, 1]の時の有効引数個数が1であること', () => {
    process.argv = [null, null, '1']
    expect(new ArgsUtil().getLength()).toBe(1)
  })
  it('argsが[null, null, 1, 2]の時の有効引数個数が2であること', () => {
    process.argv = [null, null, '1', '2']
    expect(new ArgsUtil().getLength()).toBe(2)
  })
})

describe('モード確認テスト', () => {
  it('argsが[null, null, "add"]の時のモードが"add"であること', () => {
    process.argv = [null, null, 'add']
    expect(new ArgsUtil().getMode()).toEqual('add')
  })
  it('argsが[null, null, "edit"]の時のモードが"edit"であること', () => {
    process.argv = [null, null, 'edit']
    expect(new ArgsUtil().getMode()).toEqual('edit')
  })
  it('argsが[null, null, "delete"]の時のモードが"delete"であること', () => {
    process.argv = [null, null, 'delete']
    expect(new ArgsUtil().getMode()).toEqual('delete')
  })
  it('argsが[null, null, "modify"]の時のモードがnullであること', () => {
    process.argv = [null, null, 'modify']
    expect(new ArgsUtil().getMode()).toBeNull()
  })
})
