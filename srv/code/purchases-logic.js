/**
 * 
 * @On(event = { "CREATE" }, entity = "loyaltyProgramSrv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    // Calculate reward points based on purchase value
    const rewardPoints = Math.floor(request.data.purchaseValue / 10);
    request.data.rewardPoints = rewardPoints;

    // Get the related customer
    const customer = await SELECT.one().from('loyaltyProgramSrv.Customers').where({ ID: request.data.customer_ID });

    // Update the total purchase value and total reward points of the related customer
    if (customer) {
        const totalPurchaseValue = customer.totalPurchaseValue + request.data.purchaseValue;
        const totalRewardPoints = customer.totalRewardPoints + rewardPoints;

        await UPDATE('loyaltyProgramSrv.Customers')
            .set({
                totalPurchaseValue: totalPurchaseValue,
                totalRewardPoints: totalRewardPoints
            })
            .where({ ID: customer.ID });
    }
}