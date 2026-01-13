import { TICKER } from '@claude/shared';

export function computeNavPerToken(treasuryUsd: number, circulatingSupply: number) {
  if (circulatingSupply <= 0) return 0;
  return treasuryUsd / circulatingSupply;
}

export function formatTicker() {
  return TICKER;
}
