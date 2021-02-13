<!--
order: 18
-->

# Developer Testnet

The developer testnet includes the first implementation of **[Oracle Quorums](/developer-guide/oracle-quorums)**. 

![](https://i.imgur.com/sAEuqpP.png)

### Who is this for?

This testnet is for Paralink developers and contributors to the Paralink Network Protocol and its tooling ([Paralink Node](/developer-guide/paralink-node), block explorer, UI, SDK and client libraries).

### What about validators?

Validators are welcome to participate in design discussion and share feedback, however there is no active role for them in the network yet. Validators can look forward to our parachain on Rococo coming in Q2-Q3, where they will play a key role on-chain aggregation and validation of oracle data streams.

### Info Sheet

| Key                 | Value                                   |
| ------------------- | --------------------------------------- |
| SS58 Format         | 42                                      |
| Currency, Precision | PARA, 10                                |
| Consensus Algorithm | Aura                                    |
| Finality            | GRANDPA                                 |
| Block Time          | 10s                                     |
| HTTP RPC            | `https://rpc-testnet.paralink.network`  |
| Websocket           | `wss://rpc-testnet.paralink.network/ws` |

The `types.json` file for the block explorer UI can be found [here](https://github.com/paralink-network/paralink-substrate/blob/master/types.json).

### Block Explorer

[![](https://i.imgur.com/da2ZxQu.png)](https://explorer.paralink.network/)

The block explorer is available at [https://explorer.paralink.network](https://explorer.paralink.network)