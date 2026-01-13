# agent

run the autonomous agent locally for development.

prerequisites
- set `CLAUDE_API_KEY` (claude opus 4.5) and `HELIUS_API_KEY` in your environment.

start
1. `pnpm --filter apps/agent install`
2. `pnpm --filter apps/agent start`

the agent never holds treasury private keys. it only proposes allocations and logs decisions.
