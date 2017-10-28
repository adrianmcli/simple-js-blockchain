// @flow

// 1. Define types in Flow

type Transaction = {
  from: string,
  to: string,
  amount: number
}

type Block = {
  index: number,
  txs: Transaction[],
  hash: string,
  prevHash: string,
  nonce: ?number
}

// 2. Construct a genesis block

const genesisBlock: Block = {
  index: 0,
  txs: [{ from: "Heaven", to: "Adrian", amount: 20 }],
  hash: "",
  prevHash: "000000000000000000000000000000000",
  nonce: null
}

// 3. Make a function that takes in a block and a transaction,

const blockAddTx = (block: Block, tx: Transaction): Block => {
  const newTxs = [...block.txs, tx]
  const newBlock = Object.assign({}, block, { txs: newTxs })
  return newBlock
}

// TODO - make a function that hashes a block (block -> string)
// TODO - make a function that mines a block, or in other words:
// takes in a block and an int (the nonce) and returns a new block

module.exports = {
  genesisBlock,
  blockAddTx
}
