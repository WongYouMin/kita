// JavaScript Test 3

/* Final Mixed Challenge 🎯
Use this dataset:

const rewards = [
    { name: "RM5 Voucher", pointsRequired: 100, category: "Voucher", active: true },
    { name: "RM10 Voucher", pointsRequired: 250, category: "Voucher", active: true },
    { name: "Free Coffee", pointsRequired: 150, category: "Food", active: false },
    { name: "RM20 Voucher", pointsRequired: 500, category: "Voucher", active: true },
    { name: "Free Cake", pointsRequired: 300, category: "Food", active: true },
    { name: "RM50 Voucher", pointsRequired: 1000, category: "Voucher", active: false }
];


const customer = {
    name: "Bob",
    points: 500
};
Challenge A — Affordable rewards

Get the names of all active rewards that Bob can afford.

Expected:

[
    "RM5 Voucher",
    "RM10 Voucher",
    "RM20 Voucher",
    "Free Cake"
]
Challenge B — Find a reward

Using the same data:

Find the first active reward that Bob cannot afford yet.

Expected:

{
    name: "RM50 Voucher",
    pointsRequired: 1000,
    category: "Voucher",
    active: false
}

Careful: Read the requirement literally. "Active reward that Bob cannot afford" and the expected result above don't match because RM50 Voucher is inactive.

So don't blindly follow the expected result — catch the inconsistency and tell me what the correct result should be based on the requirement. 👀

That's intentional. I want to see whether you're reasoning about the data rather than just coding toward an answer.

Challenge C — Reward count by category

Create an object containing the number of active rewards in each category.

Expected:

{
    Voucher: 3,
    Food: 1
}
Challenge D — Customer message

Print a message for every reward Bob can afford:

Bob can redeem RM5 Voucher
Bob can redeem RM10 Voucher
Bob can redeem RM20 Voucher
Bob can redeem Free Cake
Rules

This time:

You choose the methods.
You choose the order.
You can chain them.
You can use reduce().
No for / while.
Explain why you chose the method(s).

*/

const rewards = [
    { name: "RM5 Voucher", pointsRequired: 100, category: "Voucher", active: true },
    { name: "RM10 Voucher", pointsRequired: 250, category: "Voucher", active: true },
    { name: "Free Coffee", pointsRequired: 150, category: "Food", active: false },
    { name: "RM20 Voucher", pointsRequired: 500, category: "Voucher", active: true },
    { name: "Free Cake", pointsRequired: 300, category: "Food", active: true },
    { name: "RM50 Voucher", pointsRequired: 1000, category: "Voucher", active: false }
];

const customer = {
    name: "Bob",
    points: 500
};

// Challenge A: Affordable Rewards
// Filter(). Input: rewards (array of object). Output: affordable rewards (array of object)
// Map(). Input: output from filter(). Output: affordable rewards name (array of string)
const affordableRewards = rewards
    .filter(reward => reward.pointsRequired <= customer.points && reward.active === true)
    .map(reward => reward.name);
console.log(affordableRewards);

// Challenge B: Find a Reward
// Find(). Input: rewards (array of object). Output: first unaffordable reward (object)
const firstUnaffordableReward = rewards.find(reward => reward.pointsRequired > customer.points && reward.active === true);
console.log(firstUnaffordableReward);

// Challenge C: Reward Count by Category
// Filter(). Input: rewards (array of objects). Output: active rewards (array of objects).
// reduce(). Input: output from filter(). Output: rewardsCount object
const activeRewardsCount = rewards
    .filter(reward => reward.active === true)
    .reduce((rewardsCount, reward) => {
        rewardsCount[reward.category] = Object.hasOwn(rewardsCount, reward.category)
            ? rewardsCount[reward.category] + 1
            : 1;
        return rewardsCount;
    }, {});
console.log(activeRewardsCount);

function printName(name){
    console.log(`Bob can redeem ${name}`);
}

// Challenge D: Customer Message
// forEach(). Input: affordableRewards (array of string). Output: print redeemable reward. Return value: void
affordableRewards.forEach(printName);
