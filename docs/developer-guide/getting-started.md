<!--
order: 12
-->

# Getting started

## Oracle Types
Paralink network offers 3 types of oracle solutions, with pros and cons of each outlined in the [whitepaper](/whitepaper/security):
 - [Simple Oracle](/developer-guide/simple-oracle)
 - [Trusted Oracle](/developer-guide/trusted-oracle)
 - [Oracle Quorums](/developer-guide/oracle-quorums)

As part of the developer guide we will walk you trough each of the oracle solutions and provide
example implementations.

## Basics
**Simple Oracles** can be self-serviced by the Paralink Node.

**Trusted Oracles** run on smart contract chains (Ethereum, Plasm, Moonbeam, etc) and are powered by our
open-source oracle contracts for EVM and WASM runtimes.

**Oracle Qorums** where on-chain consensus is achieved trough our Substrate based blockchain
(currently in testnet phase).

The 3 oracle solutions above use [Paralink Query Language](/developer-guide/paralink-query-language) and
the [Paralink Node](/developer-guide/paralink-node) for servicing the underlying oracle requests.
