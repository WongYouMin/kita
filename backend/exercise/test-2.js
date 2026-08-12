// JavaScript Test 2
/*
### Mini Challenge — No Starter Code

A customer can only redeem a reward if:

1. They have enough points.
2. The reward is currently available.
3. Their membership level is allowed to redeem that reward.

For example:

```text
Customer:
Alice
Points: 500
Membership: Silver

Reward:
RM10 Voucher
Points Required: 300
Available: true
Minimum Membership: Gold
```

Alice should **not** be able to redeem it because she's Silver.

Now create the JavaScript yourself.

**Requirements:**

* Create the customer object.
* Create the reward object.
* Create a function that determines whether the customer is eligible.
* Create a function that performs the redemption.
* Test at least **two different scenarios** where one succeeds and one fails.

*/

const membership = {
    gold : 3,
    silver: 2,
    bronze: 1
};

const customers = [
    {
        name: "Alice",
        points: 350,
        membership: membership.gold
    },
    {
        name: "Bob",
        points: 250,
        membership: membership.silver
    }
];

const rewards = [
    {
        name: "RM 5 Voucher",
        pointsRequired: 200,
        available: false,
        minimumMembership: membership.silver
    },
    {
        name: "RM 10 Voucher",
        pointsRequired: 300,
        available: true,
        minimumMembership: membership.gold
    }
];

const isEligible = (customer, reward) => 
    customer.points >= reward.pointsRequired &&
    reward.available === true &&
    customer.membership >= reward.minimumMembership;

const redeemReward = (customer, reward) => {
    const canRedeem = isEligible(customer, reward);
    if(canRedeem){
        customer.points -= reward.pointsRequired;
        console.log(`Reward is redeemed successfully.`);

    } else{
        console.log(`Not eligible to redeem the reward.`);
    }
    console.log(`Customer points balance: ${customer.points}`);
};

const calculatePointsEarned = (customer, basePoints) => {
    let pointsEarned = 0;
    if(customer.membership === membership.gold){
        pointsEarned = basePoints + (basePoints * 0.1);
    } else {
        pointsEarned = basePoints;
    }

    return pointsEarned;
};

const earnPoints = (customer, basePoints) => {
    const pointsEarned = calculatePointsEarned(customer, basePoints);
    customer.points += pointsEarned;
    return pointsEarned;
};

console.log(customers[0]);
console.log(rewards[1]);
redeemReward(customers[0], rewards[1]);

console.log(customers[0]);
console.log(rewards[1]);
redeemReward(customers[0], rewards[1]);

console.log(customers[1]);
console.log(rewards[1]);
redeemReward(customers[1], rewards[1]);

console.log(customers[1]);
console.log(rewards[0]);
redeemReward(customers[1], rewards[0]);

console.log(`Points earned: ${earnPoints(customers[0], 100)} \nPoints balance: ${customers[0].points}`);
console.log(`Points earned: ${earnPoints(customers[1], 100)} \nPoints balance: ${customers[1].points}`);


