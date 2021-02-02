<!--
order: 12
-->

# Getting started
This guide is for developers who wish to use Paralink as an oracle solution for their smart
contracts, as well as for node operators who wish to provide a trusted oracle service or create their own
oracle quorum.

## Oracle Types
Paralink network offers 3 types of oracle solutions, with pros and cons of each outlined in the [whitepaper](/whitepaper/security):
 - Simple Oracles
 - Trusted Oracles
 - Oracle Quorums

As part of the developer guide we will walk you through each of the oracle solutions and provide
example implementations.

## Base Components
**[Simple Oracles](/developer-guide/simple-oracle)** can be self-serviced by the Paralink Node.

**[Trusted Oracles](/developer-guide/trusted-oracle)** run on smart contract chains (Ethereum, Plasm, Moonbeam, etc) and are powered by our
open-source oracle contracts for EVM and WASM runtimes.

**[Oracle Quorums](/developer-guide/oracle-quorums)** where on-chain consensus is achieved through our Substrate based blockchain
(currently in testnet phase).

The 3 oracle solutions above use **[Paralink Query Language](/developer-guide/paralink-query-language)** and
the **[Paralink Node](/developer-guide/paralink-node)** for servicing the underlying oracle requests.

## Supported Networks
| Network              | Paralink Node | Simple Oracle | Trusted Oracle | Oracle Quorum | Bridge/XCMP |
| -------------------- | ------------- | ------------- | -------------- | ------------- | ----------- |
| Ethereum             | ✔             | ✔             | ✔              | ⨯             | TBD         |
| Plasm                | ✔             | ✔             | ✔              | ⨯             | TBD         |
| Edgeware             | TBD           | TBD           | TBD            | ⨯             | TBD         |
| Moonbeam             | TBD           | TBD           | TBD            | ⨯             | TBD         |
| Paralink Testnet     | TBD           | ⨯             | ⨯              | ✔             | TBD         |
| Paralink on Kusama   | TBD           | ⨯             | ⨯              | TBD           | TBD         |
| Paralink on Polkadot | TBD           | ⨯             | ⨯              | TBD           | TBD         |

## Result Routing
The following schematic shows the results delivery path for different oracle types.
![](https://i.imgur.com/rLDzM9G.png)
In the case of Simple Oracles, the callbacks are executed by the Paralink Node directly, to the
address specified in PQL definition. 

With Trusted Oracles, the Paralink Node is used to interact with the on-chain oracle contract, which delivers the callback result to the target smart contract.

In oracle quorums the oracles submit result proposals using the Paralink Node. Paralink blockchain (as parachain) itself is responsible for aggregation and validation of the final result. Relayers send the final result to other _parachains_ via XCMP and to other _blockchains_ via respective bridge.
