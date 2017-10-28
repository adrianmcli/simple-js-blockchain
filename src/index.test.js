const { genesisBlock, blockAddTx } = require('./index')

test('first test', () => {
  const newTx = { from: "Alice", to: "Bob", amount: 10 }
  expect(blockAddTx(genesisBlock, newTx)).toMatchSnapshot()
})
