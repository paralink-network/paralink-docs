<!--
order: 14
-->

# Paralink Query Language
PQL definitions represent ETL (extract, transform, load) piplines for sourcing, aggregating and
validating information. They are the basis of oracle requests (jobs). While this may sound
daunting, PQL definitions are just a small subset of what you as a developer are already familiar
with: `json` and `sql`.

## Features
PQL currently supports `http.get`, `sql.postgres`, `ethereum.function`, `ethereum.balance` methods.
It can parse JSON and SQL responses. For Ethereum it also automatically finds and initiates the appropirate ABIs.

Information from multiple data sources can be aggregated using `mean`, `median` or `mode`.
It also supports basic math operations such as `+`, `-`, `*`, `/`, `%`.

The information can be validated off-chain using validation functions such as `min_participation`, `mode_consensus` and `variance_threshold`.

And lastly, the results can be type casted into common data types as expected by virtual
machines running the smart contracts.


## Query Builder
The Paralink Node offers a built in PQL query editor, which can also be used for testing and
publishing of the PQL defintions.
![](https://i.imgur.com/Yd3s5Xu.png)

## IPFS
IPFS is used to immutably store the job definition and provide an addressable content hash.
**Paralink Oracles accept 32 bytes long address for the PQL definition.**
This is significantly shorter than the job definition itself, making it suitable for
request signalling in resource constrained smart contract environments.

The IPFS multihash has additional metadata that is stripped out to fit into 32 bytes. We also
assume that the hash is always SHA-256. The stripping is done by removing first 2 bytes of the
multihash like so:
```python
import base58

def ipfs_to_bytes32(multihash: str):
    """Convert IPFS hash to bytes32 type."""
    bytes_array = base58.b58decode(multihash)
    return bytes_array[2:]
```

## Examples
Check out [example PQL definitions](https://github.com/paralink-network/paralink-node/tree/master/examples) to see how to:
 - Query multiple real world data sources and aggregate results
 - Query public and private SQL databases
 - Query Ethereum smart contracts
 - Relay the results back to your smart contract or oracle
