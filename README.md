# claude strategy ($claude)
<img width="1024" height="1024" alt="Gemini_Generated_Image_n7vge3n7vge3n7vg" src="https://github.com/user-attachments/assets/525bd0a4-eb1f-42e8-940f-63a02580759f" />

claude strategy is an autonomous treasury experiment on solana. the system is controlled by an autonomous agent, not by a manual script. the agent uses claude opus 4.5 as the decision engine and ingests real-time solana data from helius. 

core principles
- autonomous decision-making: the agent analyzes on-chain data, proposes allocations, and records its reasoning.
- deterministic execution: on-chain programs validate and execute proposals using predefined rules.
- transparent accounting: treasury state and events are public and auditable.
- strict constraints: no leverage, no rehypothecation, no mint after deployment, no hidden admin privileges.

what this project is not
- this is not an investment product and it does not promise returns.
- there is no discretionary human treasury control.

how the autonomous agent works (summary)
- data ingestion: helius supplies transaction and account data snapshots.
- decision engine: claude opus 4.5 evaluates liquidity, volatility, and risk, and proposes an allocation with rationale and confidence metrics.
- proposal: the agent signs and submits a `propose_allocation` transaction to the on-chain program.
- execution: the on-chain program enforces bounds and rules; if valid, it executes the allocation and emits events.

fees, allocation, and buybacks
1. protocol fees (creator fees) flow to the strategy treasury via the on-chain program.
2. the treasury initially accumulates stable assets (phase 2).
3. the agent proposes acquiring optimal assets using accumulated fees.
4. realized profits can be reinjected into $claude through buybacks executed on-chain according to deterministic rules; the agent only proposes buybacks.

code examples (illustrative, all lowercase)

example: allocation proposal payload
```json
{
	"instruction": "propose_allocation",
	"timestamp": 1700000000,
	"proposer": "agent-node-1",
	"allocation": [
		{ "asset": "usdc", "target_pct": 0.6 },
		{ "asset": "sol", "target_pct": 0.3 },
		{ "asset": "ray", "target_pct": 0.1 }
	],
	"confidence": 0.87,
	"rationale": "liquidity profile and volatility constraints met"
}
```

example: agent lifecycle (pseudocode)
```typescript
// the agent analyzes helius data via claude opus 4.5, builds a proposal, and sends it
async function agent_cycle(helius_snapshot) {
	const analysis = await call_claude_opus_4_5(helius_snapshot);
	const proposal = build_proposal_from(analysis);
	await send_propose_allocation_tx(proposal); // agent signs and submits the proposal
}

// on-chain: the program verifies the proposal, enforces bounds, and executes
// if the proposal requests a buyback, the program swaps allowed assets
// and performs the buyback of $claude according to protocol rules.
```

public metrics and nav
- treasury usd value
- allocation breakdown
- nav per token
- backing ratio
- allocation confidence metrics

how to verify on-chain
- inspect program accounts and events: `config`, `treasuryvault`, `allocationstate`, `executionqueue`, `metricsstate`.
- every proposal and execution emits events for audit and historical review.

how to run locally
1. install `pnpm`, `rust`, and `anchor`.
2. at the repo root: `pnpm install`.
3. build: `pnpm build`.
4. run the agent: see `apps/agent/README.md`.
5. run the dashboard: see `apps/web/README.md`.

repository layout
- `apps/web` - next.js dashboard (read-only)
- `apps/agent` - autonomous agent (node + typescript)
- `programs/claude_strategy_core` - anchor program: core logic
- `programs/claude_strategy_treasury` - anchor program: treasury and execution
- `packages/shared` - shared constants and types
- `packages/analytics` - deterministic nav and metrics calculations
- `docs` - design and security documents
<img width="1792" height="576" alt="Gemini_Generated_Image_k2jdok2jdok2jdok" src="https://github.com/user-attachments/assets/cb0cf5a4-b9be-4f98-93be-5e543dee4958" />
