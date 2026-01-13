# architecture

overview of system components and interactions.

- autonomous agent (apps/agent) ingests helius data, uses claude opus 4.5 for decisions, and proposes allocations.
- anchor programs enforce protocol rules and execute allocations on-chain.
- web dashboard presents read-only metrics and decision logs.

security goals
- agent must not hold treasury private keys.
- all state transitions must be verifiable on-chain.
