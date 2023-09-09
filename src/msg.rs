use cosmwasm_schema::{cw_serde, QueryResponses};

#[cw_serde]
pub struct InstantiateMsg {
    pub count: String,
}

#[cw_serde]
pub enum ExecuteMsg {
    //Increment {},
    Reset { count: String },
}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    // GetCount returns the current count as a json-encoded number
    #[returns(GetCountResponse)]
    GetCount {},
}

// We define a custom struct for each query response
#[cw_serde]
pub struct GetCountResponse {
    pub count: String,
}
