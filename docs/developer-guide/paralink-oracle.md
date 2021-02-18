<!--
order: 15
-->

# Paralink Oracle
Paralink oracle is a smart contracts based oracle solution. It contains programmable rules for usage, request
lifetimes, fees, refunds and governance. The paralink oracle can be deployed and governed by individuals,
multi-sig's or DAOs. The governing body appoints the oracle as well as a whitelist of smart
contracts that are being provided with the oracle service.

In essence, Paralink Oracles are open source and can be deployed by anyone, however in practice, the
most reputable oracle providers will likely be the most successful.

Paralink oracles a great DeFi primitive for reputable data vendors to sell their on-demand data feeds.

**Example uses cases:**

 - An oracle solution for a decentralized Prediction Market
 - A DAO governed Paralink Oracle supplying real world outcomes to the claims on insurance platform
 - A data vendor such as CoinGecko supplying pricing information to a DeFi money market

## Request Lifecycle

The Paralink Oracle follows request/response lifecycle.

DeFi smart contracts can make oracle requests to the Paralink Oracle via `request()` method which accepts IPFS hash of the PQL query. This allows DeFi contracts to succinctly request any type of data along with aggregation/validation rules without having to explicitly code these rules into smart contracts.

Paralink Node monitors Paralink Oracles for incoming requests, and when such request arrives it downloads and executes the PQL query, and writes the result to the Oracle contract.

The Paralink Oracle contract relays the answer to the original DeFi contract via `callback()` function.

## Governance

The Paralink Oracle contract is governed by an `admin`. 

The admin can be the individual, a trusted third party, a mulit-sig or a DAO.

The contract admin can:

- set the oracle fees via `set_fee()` in WASM or `setMinimumFee()` in EVM
- set authorized oracles and oracle consumers via `add_user()`, `remove_user()` and `set_oracle()` in WASM or `setAuthorizedNode()` in EVM

Anyone can:

- cancel and refund expired oracle request via `clear_expired()` in WASM / `cancelRequest()` in EVM

## Deploying a Paralink Oracle
Currently we support multiple EVM and WASM platforms. See the [supported networks](/developer-guide/getting-started.html#supported-networks) table for more details.

### Solidity and EVM
Our Solidity contract is suitable for Ethereum, its derivatives (ETC, BSC, TRON) and the Polkadot Substrate runtimes with a Frontier pallet enabled.

Deploying the Paralink Oracle on EVM chains is as simple as:

```
pipenv run brownie run deploy/oracle.py --network ethereum-mainnet
```

Check the [Solidity Contracts](https://github.com/paralink-network/solidity-contracts) guide for more details.

### Rust and WASM
Our Ink! contract is suitable for the Polkadot ecosystem. More precisely, for all Substrate runtimes
with the Contracts pallet enabled.

The contracts need to be compiled to WASM and the resulting blob uploaded to the target chain. This can be done by compiling our [contracts](https://github.com/paralink-network/ink-contracts) and following the [Ink! deployment guide](https://substrate.dev/substrate-contracts-workshop/#/0/deploying-your-contract).

## Configuring Paralink Node

In order for the Paralink Node to start servicing your Paralink Oracle requests you need to add your newly deployed oracle contract to the `~/.paralink/chain_config.json` file and restart the Paralink Node.

