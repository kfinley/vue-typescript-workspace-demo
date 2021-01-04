/**
 * Generate random emoji.
 */
function emoji() {
  const emojis = ['🎨', '💰', '🎩', '🎒', '🧿', '👍 '];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

export default emoji;
