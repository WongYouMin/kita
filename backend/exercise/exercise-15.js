const rewards = ["A", "B", "C", "D", "E", "F"];

// Get first 2 rewards
console.log(rewards.slice(0, 2));

// Get last 3 rewards
console.log(rewards.slice(-3, rewards.length));

// Get from C to E
console.log(rewards.slice(2, -1));

// Everything except A
console.log(rewards.slice(1, rewards.length));

// Everything except F
console.log(rewards.slice(0, -1));

// From B to D
console.log(rewards.slice(1, -2));

// From C to end
console.log(rewards.slice(2, rewards.length));

// From 4-th last item to the second last item
console.log(rewards.slice(-4, -1));

// Exclude first two and last two
console.log(rewards.slice(2, -2));

// B C D
console.log(rewards.slice(-5, -2));