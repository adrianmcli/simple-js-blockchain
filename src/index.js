// @flow
const SHA256 = require("crypto-js/sha256")

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

// 4. make a function that hashes a block (block -> string)

const hashBlock = (block: Block): string => {
  const { index, prevHash } = block
  const blockTxStr = JSON.stringify(block.txs)
  const hash = SHA256(index + prevHash + blockTxStr)
  return hash.toString()
}

// TODO - make a function that mines a block, or in other words:
// takes in a block and an int (the nonce) and returns a new block

module.exports = {
  genesisBlock,
  blockAddTx,
  hashBlock
}
