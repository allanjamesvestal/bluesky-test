import bsky from '@atproto/api';
const { BskyAgent } = bsky;
import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

// Create a Bluesky Agent
const agent = new BskyAgent({
  service: 'https://bsky.social',
});

await agent.login({
  identifier: process.env.BLUESKY_USERNAME!,
  password: process.env.BLUESKY_PASSWORD!,
});

// Post the tweet.
async function makeFirstPost(emojiString: string): Promise<void> {
  const response = await agent.post({
    text: `${emojiString} Hello world!`
  });

  console.log(JSON.stringify(response));
}

await makeFirstPost("👋✨🍾");
