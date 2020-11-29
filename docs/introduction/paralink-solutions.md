<!--
order: 2
-->

# Paralink Solutions

#### Real-world data ingress

Sourcing the data is done by **Paralink Nodes** through Paralink Query Language (PQL). **PQL** allows one to query SQL databases, access web API's, scrape websites as well as access state from other blockchains. Additional robustness is achieved with PQL validation, aggregation and interpolation rules for merging information from different sources. The PQL definitions describe the ETL process to be executed by Paralink Nodes and are immutably stored and accessed via IPFS. This allows developers to add custom data sources and post-processing rules in a permissionless way. A public, community maintained repository of PQL definitions will be available after launch, providing developers with pre-built solutions for most common data problems. 

Read more: [Paralink Node](/whitepaper/paralink-node.html), [PQL](/whitepaper/PQL.html)

#### On-Chain Security

Some data sources require more security than others. One such example are the real-time price feeds to be used in decentralized derivative and money markets, where any corruption in the price feeds can result in large financial losses. For this use case, a reputable quorum of relayers with on-chain coordination, validation and interpolation mechanisms is required. Performing such consensus algorithm at high frequency is prohibitively expensive on Ethereum due to low throughput and high gas costs. For this reason, Paralink on-chain consensus algorithm is being built using **Polkadot** and its Substrate stack.

Read more: [On-chain consensus](/whitepaper/consensus.html)

#### High quality entropy

Blockchains are purely deterministic state machines by necessity of a block-level consensus algorithm. This means that a native implementation of randomness to be used for luck based games is not possible. For this reason, Paralink Link provides a cryptographically signed hardware based entropy ingress. Public entropy samples will be provided on the daily basis for statistical analysis.

Read more: [Entropy generation](/whitepaper/entropy.html)

-------

### Illustration

With these solutions in mind, one can think of Paralink as a data bridge between blockchains and real world data.

![](https://i.imgur.com/dAfML7d.png)
