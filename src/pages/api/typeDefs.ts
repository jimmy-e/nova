import { gql } from 'graphql-tag';

export default gql`
    # ----- INPUTS ----- #
    
    input TransactionsInput {
        page_number: Int!
        page_size: Int!
        recipient_name: String
        reviewer_name: String
        state: String
    }
    
    # ----- TYPES ----- #
    
    type Transaction {
        id: String!
        created_at: String!
        first_recipient_completed_at: String
        first_recipient_email: String
        first_recipient_name: String
        invited_by: String!
        latest_state_change_at: String!
        progress: Int!
        reviewer_names: [String]
        sender_entity_handle: String!
        state: String!
        template_child_name: String!
        template_name: String!
    }
    
    type TransactionsData {
        transactions: [Transaction!]!
        valid_entries: Int!
    }

    # ----- QUERY ----- #
    
    type Query {
        transactions(input: TransactionsInput): TransactionsData!
    }
`;
