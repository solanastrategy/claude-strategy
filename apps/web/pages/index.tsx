import Head from 'next/head';
import { formatTicker } from '@claude/analytics';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>claude strategy</title>
      </Head>
      <main>
        <h1 className="text-2xl">claude strategy ({formatTicker()})</h1>
        <p>overview, treasury composition, ai decisions, metrics, and risks.</p>
      </main>
    </div>
  );
}
