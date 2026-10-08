
const transactionType = {
    earn: 1,
    redeem: 2
};
const transactionsData = [
    { id: 1, customerId: 3, type: 1, points: 100 },
    { id: 2, customerId: 4, type: 1, points: 200 },
    { id: 3, customerId: 3, type: 2, rewardId: 4, points: -500 },
    { id: 4, customerId: 5, type: 1, points: 50 },
    { id: 5, customerId: 4, type: 2, rewardId: 5, points: -200 }
];

export {
    transactionType,
    transactionsData
};