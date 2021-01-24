<!--
order: 8
-->

# Paralink Token

Paralink Token (PARA) is an incentive token used for on-chain coordination and governance.

### Gas Costs & Ingress Incentives

PARA is used to pay for gas costs of the callbacks onto 3rd party blockchains. The latest suggested gas price is available through the [Paralink Gas Oracle]().

Adding PARA as a fee to a data request transaction is also an incentive mechanism for a particular quorum to prioritize the query.

### Creating a Quorum of Relayers

Relayer quorums are self-organizing groups of Paralink Node operators, who's job is to service the data requests. A quorum can be created by anyone, and its ownership rights are granted based on the amount of Paralink Tokens staked into the newly created quorum contract. The ownership is represented with QT's (quorum tokens), which are backwards convertible into Paralink Tokens on quorum dissolution. 

The quorum is therefore governed by QT holders, which are also responsible for maintaining a top list of trusted relayer members. All the revenue generated (in PARA) by the quorum is split between QT holders and relayers, as per the rules defined at quorum creation.

