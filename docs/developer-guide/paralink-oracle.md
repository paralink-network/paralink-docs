<!--
order: 15
-->

# Paralink Oracle
Paralink oracle is a smart contracts based oracle solution. It contains programmable rules for usage, request
lifetimes, fees, refunds and governance. The paralink oracle can be deployed and governed by individuals,
multi-sig's or DAOs. The governing body appoints the oracle as well as a whitelist of smart
contracts that are being provided with the oracle service.

In essence, Paralink Oracles are open source and can be deployed by anyone, however in practice, the
most reputable TO's will likely be the most successful.

Paralink oracles are also a DeFi primitive for reputable data vendors to sell their signed data
feeds.

**Example uses cases:**
 - An oracle solution for a decentralized Prediction Market
 - A DAO governed Paralink Oracle supplying real world outcomes to the claims on insurance platform
 - A data vendor such as CoinGecko supplying pricing information to a DeFi money market

## Deploying a Paralink Oracle
Currently we support multiple EVM and WASM platforms. See the [supported networks](/developer-guide/getting-started.html#supported-networks) table
for more details.

### Solidity and EVM
Our Solidity contract is suitable for Ethereum, its derivatives (ETC, BSC, TRON) and the Polkadot Substrate runtimes with a
Frontier pallet enabled.

### Rust and WASM
Our Ink! contract is suitable for the Polkadot ecosystem. More precisely, for all Substrate runtimes
with the Contracts pallet enabled.

## Configuring your smart contract
### Callbacks
Your smart contract needs to be able to receive callbacks from your Paralink Oracle contract.

### Requests
It can optionally also be configured to make oracle job requests.

## Configuring Paralink Node

## Governance

