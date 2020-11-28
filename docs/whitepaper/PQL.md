<!--
order: 5
-->

# Paralink Query Language

Paralink data requests can be made via PQL definitions, which are JSON based descriptions of ETL (Extract, Transform & Load) jobs. PQL queries are done via SQL like interface which generalizes over common data structures (JSON, XML, SQL), and includes basic post processing utilities such as math functions and type casting.

The data collected from multiple sources and aggregated with a function like `median` or `mean`, validated using `validation` conditions  and  then returned to the caller's smart contract of choice via the `callback`.

### Example definition

```json
{
    "name": "Bitcoin Ticker",
    "schema": {
        "@price": "eth::uint256",
    },
    "sources": [
        {
            "method": "http.get",
            "uri": "https://my-crypto-api.com/tickers",
            "result": {
                "parser": "json",
                "query": "SELECT int(results.BTC.Price * 1e18) AS @price"
            }
        },
        {
            "method": "http.post",
            "uri": "https://my-crypto-api.com/tickers",
            "content_type": "application/json",
            "args": {"foo": "bar"},
            "result": {
                "parser": "json",
                "query": "SELECT int(x.Price * 1e18) AS @price \
                FROM data.results AS x WHERE x.SYMBOL = 'BTC'"
            }
        }
    ],
    "aggregate": {"@price": "mean"},
    "validate": {
        "min_treshold": 2,
        "max_variance": 0.5,
    },
    "callback": {
        "chain": "Ethereum",
        "address": "0x123...f",
        "method": "updatePrice(string,uint256)",
        "args": ["BTC", "@price"],
    },
    "on_error": {}
}
```



*Note: PQL is not finalized yet, and subject to change in future revisions.*

### IPFS

IPFS is used to immutably store the job definition and provide an addressable content hash. The hash is only 32 bytes long, which is significantly shorter than the job definition itself, making it suitable for request signalling on resource constrained chains such as Ethereum.
