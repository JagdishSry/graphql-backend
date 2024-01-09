
export const todoTypes = `

type BrokerUsers{
    id:ID!
    user_id:ID!
    title:String
    first_name:String
    last_name:String
    DOB:String
    id_type:String
    passport_number:String
    national_id_number:String
    qatar_id_number:String
    issue_date:String
    expiry_date:String
    place_id_issue:String
    nationality:String
    designation:String
    company_name:String
    project_destinations_interested:String
    business_development_manager:String
    country_residence:String
    mobile_no:String
    alt_mobile_no:String
    city:String
    postal_code:String
    po_box:String
    country:String
    bank_acc_name:String
    bank_acc_number:String
    bank_name:String
    bank_branch:String
    bank_city:String
    bank_country:String
    bank_currency:String
    bank_swift_code:String
    transfer_code:String
    bank_sort_code:String
    bank_IBAN_number:String
    bank_IFSC_code:String
    name_of_transfer_code:String
    transfer_code_other_name_val:String
    created_by:String
    created_at:String
    modify_by:String
    modify_at:String
    is_deleted:String
    is_active:String
    country_code:String
    mobile_no_country_code:String
    alt_mobile_no_country_code:String
    bank_address:String
    national_residence_card_number:String
    address:String
}

type Query{
    getBrokersList:[BrokerUsers]
    getBroker(id:ID!): BrokerUsers
}

type Mutation {
    addBroker(broker:addNewBroker!):BrokerUsers
    updateBroker(id:ID!, broker:addNewBroker!):BrokerUsers
    deleteBroker(id:ID!):[BrokerUsers]
}

input addNewBroker{
    title:String!
    firstName:String!
    lastName:String!
}


`;