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

// TODO - construct a genesis block
// TODO - make a function that takes in a block and a transaction,
// and returns a new block with the transaction added inside it
// TODO - make a function that hashes a block (block -> string)
// TODO - make a function that mines a block, or in other words:
// takes in a block and an int (the nonce) and returns a new block
