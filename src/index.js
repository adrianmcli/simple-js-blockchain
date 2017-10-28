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

// 3. Make a function that adds a transaction into a block

const blockAddTx = (block: Block, tx: Transaction): Block => {
  const newTxs = [...block.txs, tx]
  const newBlock = Object.assign({}, block, { txs: newTxs })
  return newBlock
}

// 4. Make a function that hashes a block (block -> string)

const hashBlock = (block: Block): string => {
  const { index, prevHash } = block
  const blockTxStr = JSON.stringify(block.txs)
  const hash = SHA256(index + prevHash + blockTxStr)
  return hash.toString()
}

// 5. Make a function that mines a block

const mineBlock = (block: Block, initNonce: number): Block => {
  const blockHash = hashBlock(block)
  const prevHash = block.prevHash
  const getProof = (nonce: number): string =>
    SHA256(blockHash + nonce.toString() + prevHash).toString()

  let proofOfWork = getProof(initNonce)
  let currentNonce = initNonce
  while (proofOfWork.charAt(0) !== "0") {
    currentNonce = currentNonce + 1
    proofOfWork = getProof(currentNonce)
  }
  return Object.assign({}, block, { hash: blockHash, nonce: currentNonce })
}

module.exports = {
  genesisBlock,
  blockAddTx,
  hashBlock,
  mineBlock
}
