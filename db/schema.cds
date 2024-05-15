namespace loyaltyProgram;

entity Customers {
  key ID: UUID;
  name: String;
  email: String;
  customerNumber: Integer;
  totalPurchaseValue: Integer;
  totalRewardPoints: Integer;
  totalRedeemedRewardPoints: Integer;
}

entity Purchases {
  key ID: UUID;
  purchaseValue: Integer;
  rewardPoints: Integer;
  selectedProduct: String;
  customer: Association to Customers;
}

entity Redemptions {
  key ID: UUID;
  redeemedAmount: Integer;
  customer: Association to Customers;
}

