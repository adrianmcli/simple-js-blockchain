const { genesisBlock, blockAddTx, hashBlock } = require('./index')

test('blockAddTx', () => {
  const newTx = { from: "Alice", to: "Bob", amount: 10 }
  expect(blockAddTx(genesisBlock, newTx)).toMatchSnapshot()
})

describe('hashBlock', () => {
  it('should hash the genesisBlock', () => {
    expect(hashBlock(genesisBlock)).toMatchSnapshot()
  })

  it('should hash a non-genesis block', () => {
    const newTx = { from: "Alice", to: "Bob", amount: 10 }
    const nonGenesisBlock = blockAddTx(genesisBlock, newTx)
    expect(hashBlock(nonGenesisBlock)).toMatchSnapshot()
  })
})
