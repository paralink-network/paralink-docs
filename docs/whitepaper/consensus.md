<!--
order: 7
-->

# On-Chain Consensus

### Relayer quorums

Relayer quorums are self-organizing groups of Paralink Node operators, who's job is to service the data requests. Relayer quorums earn fees for providing the service (see [Token](/whitepaper/token.html#creating-a-quorum-of-relayers)) and can be penalized - have their revenue and or stake slashed - via [Reputation](/whitepaper/reputation) system.

### Consensus

In order to service a callback to a data request, `min_threshold` relayers have to agree on the result. Agreement is defined by the variance threshold. The result is then aggregated on-chain using the mean for continuous, and mode for discrete values.

### Costs and scalability

Some data sources require more security than others. One such example are the real-time price feeds to be used in decentralized derivative and money markets, where any corruption in the price feeds can result in large financial losses. For this use case, a sufficiently large and reputable quorum of relayers with on-chain coordination, validation and interpolation mechanisms is required. Performing such consensus algorithm at high frequency is prohibitively expensive on Ethereum due to low throughput and high gas costs. For this reason, Paralink on-chain consensus algorithm is being built using Polkadot and its Substrate stack.

### Ethereum <> Polkadot Bridge

While the on-chain coordination is done on Polkadot, the result of the computation can be made available through directional Ethereum <> Polkadot bridge. The bridge technology is being developed by the community, and we anticipate bridges with other public blockchains to become available in the future.
