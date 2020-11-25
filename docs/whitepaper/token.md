<!--
order: 7
-->

# Lattice Token

Lattice Link Token (LLT) is an incentive token used for on-chain coordination and governance. 

### Gas Costs & Ingress Incentives

LLT is used to pay for gas costs of the callbacks onto 3rd party blockchains. The latest suggested gas price is available trough the [Lattice Gas Oracle]().

Adding LLT as a fee to a data request transaction is also an incentive mechanism for a particular quorum to prioritize the query.

### Creating a Quorum of Relayers

Relayer quorums are self-organizing groups of Lattice Node operators, who's job is to service the data requests. A quorum can be created by anyone, and its ownership rights are granted based on the amount of Lattice Tokens staked into the newly created quorum contract. The ownership is represented with QT's (quorum tokens), which are backwards convertible into Lattice Tokens on quorum dissolution. 

The quorum is therefore governed by QT holders, which are also responsible for maintaining a top list of trusted relayer members. All the revenue generated (in LLT) by the quorum is split between QT holders and relayers, as per the rules defined at quorum creation.

