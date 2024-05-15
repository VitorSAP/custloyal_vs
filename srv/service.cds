using { loyaltyProgram } from '../db/schema.cds';

@path: '/service/loyaltyProgram'
@requires: 'authenticated-user'
service loyaltyProgramSrv {
  @odata.draft.enabled
  entity Customers as projection on loyaltyProgram.Customers;
  @odata.draft.enabled
  entity Purchases as projection on loyaltyProgram.Purchases;
  @odata.draft.enabled
  entity Redemptions as projection on loyaltyProgram.Redemptions;
}