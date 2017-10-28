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

// TODO - make a function that takes in a block and a transaction,
// and returns a new block with the transaction added inside it
// TODO - make a function that hashes a block (block -> string)
// TODO - make a function that mines a block, or in other words:
// takes in a block and an int (the nonce) and returns a new block
