/**
 * 
 * @On(event = { "CREATE" }, entity = "loyaltyProgramSrv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
  const { data } = request;
  if (!data.customer_ID || !data.redeemedAmount) {
    return request.error(400, 'Customer ID and redeemed amount are required');
  }

  const customer = await SELECT.one('loyaltyProgramSrv.Customers')
    .where({ ID: data.customer_ID });

  if (!customer) {
    return request.error(404, `Customer with ID ${data.customer_ID} not found`);
  }

  if (customer.totalRewardPoints < data.redeemedAmount) {
    return request.error(400, 'Insufficient reward points');
  }

  customer.totalRewardPoints -= data.redeemedAmount;
  customer.totalRedeemedRewardPoints += data.redeemedAmount;

  await UPDATE('loyaltyProgramSrv.Customers')
    .set({
      totalRewardPoints: customer.totalRewardPoints,
      totalRedeemedRewardPoints: customer.totalRedeemedRewardPoints
    })
    .where({ ID: data.customer_ID });
}