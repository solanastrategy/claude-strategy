import fetch from 'node-fetch';
import { Connection, PublicKey } from '@solana/web3.js';
import { TICKER } from '@claude/shared';

// agent configuration is provided via environment variables
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY || '';
const HELIUS_API_KEY = process.env.HELIUS_API_KEY || '';
const SOLANA_RPC = process.env.SOLANA_RPC || 'https://api.mainnet-beta.solana.com';

async function fetchHeliusData() {
  // placeholder: sample helius call pattern
  if (!HELIUS_API_KEY) return null;
  return { sample: true };
}

async function callClaude(prompt: string) {
  // placeholder for claude opus 4.5 api call
  if (!CLAUDE_API_KEY) return { decision: 'hold', rationale: 'api key not configured' };
  return { decision: 'hold', rationale: 'placeholder' };
}

async function main() {
  const conn = new Connection(SOLANA_RPC);
  console.log('starting agent for', TICKER);

  const helius = await fetchHeliusData();
  const prompt = `analyze: ${JSON.stringify(helius)}`;
  const result = await callClaude(prompt);

  // proposals must be sent to on-chain program via propose_allocation instruction
  console.log('proposal', result);
}

main().catch((err) => {
  console.error('agent error', err);
  process.exit(1);
});
