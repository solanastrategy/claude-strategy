# agent

this document describes the autonomous agent architecture.

components
- data layer: helius (webhooks or polling) provides solana transaction and account updates.
- decision engine: claude opus 4.5 called via secure api. responses include rationale and confidence.
- proposer: signs and sends `propose_allocation` transactions to the anchor program. the agent's signer only submits proposals; it cannot move treasury funds.
- logger: all decisions are logged with timestamp, input data snapshot, model response, and signatures.

operational constraints
- the agent only proposes actions within predefined bounds.
- the agent never holds or accesses treasury private keys.
