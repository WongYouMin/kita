// JavaScript Test 11: Mini Project - Customer Rewards Dashboard

/*
Project Goal
    1. Fetch customers.
    2. Fetch rewards.
    3. Combine the information.
    4. Calculate useful customer statistics.
    5. Display a customer summary.
*/

// ==================================================================
// Part 1: Fetch the data

// Challenge 1: Get the customers
// url: "https://jsonplaceholder.typicode.com/users"

const getCustomers = async() => {
    try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        const customers = await response.json();
        return customers;
    } catch (error) {
        console.log(error.message);
    }
};

// Challenge 2: Get the rewards
// url: "https://jsonplaceholder.typicode.com/todos"

const getRewards = async() => {
   try {
        const url = "https://jsonplaceholder.typicode.com/todos";
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        const rewards = await response.json();
        return rewards;
   } catch (error) {
        console.log(error.message);
   }
};

// Challenge 4: Calculate useful customer statistics
const calculateCustomerStatistics = (customers, rewards) => {
    const customerRewards = customers.map(({id, name}) => {
        const customerReward = rewards.filter(({userId}) => id === userId);
        const totalRewards = customerReward.length;
        let completedRewards = 0;
        let pendingRewards = 0;
        customerReward.forEach(({completed}) => {
            completed === true ? completedRewards++ : pendingRewards++;
        });
        return {
            customerId: id,
            customerName: name,
            totalRewards,
            completedRewards,
            pendingRewards
        };
    });
    return customerRewards;
};

const calculateOverallStatistics = (customerStatistics) => {

   const overallStatistics = customerStatistics.reduce((statistics, {totalRewards, completedRewards, pendingRewards}) => {
        statistics.totalRewards += totalRewards;
        statistics.totalCompletedRewards += completedRewards;
        statistics.totalPendingRewards += pendingRewards;
        return statistics;
    }, {
        totalCustomers: customerStatistics.length,
        totalRewards: 0,
        totalCompletedRewards: 0,
        totalPendingRewards: 0
    });
    return overallStatistics;
};

// Challenge 5: Display a customer summary
const displayCustomerSummary = ({totalCustomers, totalRewards, totalCompletedRewards, totalPendingRewards}, customerStatistics) => {
    console.log(`============================================`);
    console.log(`Customer Rewards Summary`);
    console.log(`============================================`);
    console.log(`Total Customers: ${totalCustomers}`);
    console.log(`Total Rewards: ${totalRewards}`);
    console.log(`Total Completed Rewards: ${totalCompletedRewards}`);
    console.log(`Total Pending Rewards: ${totalPendingRewards}`);
    console.log(`============================================`);
    customerStatistics.forEach(({customerId, customerName, totalRewards, completedRewards, pendingRewards}) => {
        console.log(`Customer Id: ${customerId}`);
        console.log(`Name: ${customerName}`);
        console.log(`Total Rewards: ${totalRewards}`);
        console.log(`Completed Rewards: ${completedRewards}`);
        console.log(`Pending Rewards: ${pendingRewards}`);
        console.log(`============================================`);
    });

};

// Challenge 3: Combine the information
const getInformation = async() => {
    try {
        const information = await Promise.all([getCustomers(), getRewards()]);
        const customerStatistics = calculateCustomerStatistics(...information);
        const overallStatistics = calculateOverallStatistics(customerStatistics);
        displayCustomerSummary(overallStatistics, customerStatistics);
    } catch (error) {
        console.log(error.message);
    }

    
};

getInformation();

