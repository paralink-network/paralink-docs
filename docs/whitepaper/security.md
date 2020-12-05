<!--
order: 6
-->

# Security

To satisfy all kinds of applications, Paralink offers 3 security models with different cost, convenience and security characteristics. 

## Simple Ingress

Paralink Nodes can be used as a multi-chain ingress from any 3rd party data source by any developer.

**Pros:**

- Very easy to implement (just PQL definition)
- Cheap and fast
- Ability to source and validate multiple information sources
- Callback support for all blockchains, without need for bridges

**Cons:**

- Requires trust in node operators
- Only suitable for applications that don't have financial impact

## Trusted Ingress

Simple Ingress can be upgraded by the virtue of cryptographically signed PQL results with ECDSA private keys from reputable data providers.

**Pros:**

- Suitable for Prediction Markets, Insurance, Governance and Gambling applications
- Easy to implement (PQL + Signing Proxy Contract)
- Cheap and fast
- Ability for established data vendors to sell their services on Paralink Network
- Callback support for all blockchains, without need for bridges

**Cons:**

- Single point of failure

## On-Chain Security

For applications that require the highest level of security, without having to rely on a single source of truth.

**Pros:**

- Suitable for Money Markets, Derivatives and other high-stakes financial applications
- Relatively easy to implement (PQL + Relayer Quorum + Bridge)
- On chain aggregation and validation guarantees
- Highest robustness and data quality

**Cons:**

- Requires the use of bridges, ie. Polkadot <> Ethereum, so not all chains are supported (yet)
- More expensive due to the costs of on-chain coordination
