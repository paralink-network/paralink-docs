<!--
order: 13
-->

# Paralink Node

Paralink Node is the backbone of the Paralink Network. Its responsible for sourcing information from
real world data sources and across blockchains. Multiple data sources are supported, as well
as aggregation and validation as defined in [PQL](/developer-guide/paralink-query-language) pipelines.

## Supported protocols
Currently HTTP/JSON, SQL (Postgres, MySQL, SQLite) and IPFS are supported. We are also planning to add
support for GraphQL.

## Supported networks
Paralink Node currently supports Ethereum and Plasm. Our goal is to support as many networks as
possible through our extensible architecture.

## Installation
To setup the Paralink Node, follow the [instructions](https://github.com/paralink-network/paralink-node/blob/master/README.md).

## Configuration

### Base configuration
Paralink Node depends on PostgreSQL for persistance. Please set your local postgres credentials in
`.env` file.

### Networks
Add the network(s) you wish to interact with by modifying the `.env` config. For example, to add
Ethereum support via Infura, set:
```
WEB3_PROVIDER_URI=https://mainnet.infura.io/v3/<infura-project-id>
```

### Accounts
For the node to be able to execute callbacks or interact with the oracle contracts it needs the
appropriate private keys for singning the transactions.

The keys can be imported via cli:
```
./paralink-node accounts import <private_key>
```

### Contracts
Check the [Simple Oracle](/developer-guide/simple-oracle) and the [Trusted Oracle](/developer-guide/trusted-oracle) guides to see how to configure the Paralink Node to work with each.

## Usage
The node can be started via `node start` command.
```
./paralink-node node start --host 127.0.0.1
```
This will also bring up the UI, available at `http://localhost:7424`

## API
The node also exposes JSON-RPC endpoints for programmatic use.
