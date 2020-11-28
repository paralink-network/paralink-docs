<!--
order: 4
-->

# Paralink Node

Paralink Node is an [open-source]() piece of software responsible for accessing real world data, and relaying it back to smart contracts via callbacks.

Paralink Node *can* be ran as a self-hosted solution, which offers cheap but centralized data ingress solution. Ideally it is ran by self-organizing quorums providing a robust ingress service. See [on chain consensus](/whitepaper/consensus) for more details.

### Real world data

Paralink Node can fetch real world data from RESTful HTTP API's and comes with variety of parsers (JSON, HTML, XML). Support for SQL databases and other protocols such as gRPC is planned. Furthermore, it should be possible to query confirmed state on public blockchains.

### Blockchain ingress

While we are starting with Ethereum and Polkadot ingress, we would like to support *all* public blockchains. This should be possible due to Paralink Node's modular architecture and its open-source nature.

The results of ETL pipelines are fed back to user defined smart contract on their respective blockchain via a `callback` in the PQL definition.

### 

