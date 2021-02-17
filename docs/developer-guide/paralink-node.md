<!--
order: 13
-->

# Paralink Node

Paralink Node is the backbone of the Paralink Network. Its responsible for sourcing information from
real world data sources and across blockchains. Multiple data sources are supported, as well
as aggregation and validation as defined in [PQL](/developer-guide/paralink-query-language) pipelines.

## Supported data protocols
Currently HTTP/JSON, SQL (Postgres, MySQL, SQLite), GraphQL and IPFS are supported. 

## Supported chains

Currently we support Ethereum and its derivatives (Binance Smart Chain, Tron, etc) and Polkadot Substrate based chains. Please refer to this [table](/developer-guide/getting-started.html#supported-networks) for up to date information on supported networks.

## Installation
In this guide we will opt in for a premade Docker setup for a quick start. If you're interested in setting up all the components yourself, feel free to follow the [installation and configuration guide](https://github.com/paralink-network/paralink-node/blob/master/README.md).

**Step 1: Clone the Paralink Node**

```
git clone --recurse-submodules git@github.com:paralink-network/paralink-node.git
cd paralink_node
```

**Step 2: Setup the configuration directory**

In this case we will just opt in for a `.paralink` folder in our home directory for convenience.

Modify `HOME_MOUNT_DIR` variable in `.env` to point to your home directory. Then create a `.paralink` folder inside the `HOME_MOUNT_DIR`.

```
mkdir ~/.paralink
```

### Base configuration
We will setup the basic Paralink Node without any additional plugins:

```
echo "plugins:" > ~/.paralink/plugins.yaml
```

### Networks
Add the networks you wish to interact with by modifying the `~/.paralink/chain_config.json` file

**Example 1:  Ethereum via Infura:**

```
{
    "name": "eth-mainnet",
    "type": "evm",
    "project": "eth",
    "url":  "https://mainnet.infura.io/v3/<INFURA_KEY>",
    "credentials": {},
    "enabled": true,
    "tracked_contracts": []
}
```

**Example 2: Substrate chain (Plasm EVM) with its full-node running locally:**

```
{
	"name": "plasm-local",
	"type": "evm",
	"project": "plasm",
	"url":  "ws://localhost:8545",
	"credentials": {"private_key": "<PRIVATE_KEY>"},
	"tracked_contracts": [<list of contract addresses to listen for events>],
	"oracle_metadata": "<path_to_oracle_abi> | optional"
}
```

**Example 3: Substrate chain with its full-node running locally:**

```
{
	"name": "dev-canvas",
	"type": "substrate",
	"project": "canvas",
	"url": "ws://127.0.0.1:9944",
	"credentials":{
			"private_key": "<PRIVATE_KEY>",
			"public_key": "<PUBLIC_KEY, different than SS58 ADDRESS>"
	},
	"tracked_contracts": [<list of contract addresses to listen for events>],
	"metadata_file": "<path to ink! oracle metadata.json | optional"
}
```

*Note: Storing credentials in plain text is not wise. We are working on a proper account management solution.*

What are the `tracked_contracts`? These are the oracles we will be servicing with our node.  If you know the addresses of the oracles already simply paste them into `tracked_contracts`. Otherwise you will have to deploy your own.

Check out the [Trusted Oracle](/developer-guide/trusted-oracle) guide to see how to deploy EVM and WASM based oracles.

## Run the node
Once the node is fully configured with the networks, accounts and oracle contract addresses, we can start it up with the `docker-compose`.
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```
This will also bring up the UI, available at `http://localhost:7425`

## API
The node also exposes JSON-RPC endpoints for programmatic use. The API is available at `http://localhost:7425`. Please check out our [examples](https://github.com/paralink-network/paralink-node/tree/master/examples) on how to use the API.
