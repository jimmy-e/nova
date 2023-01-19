import { gql } from 'graphql-tag';

export default gql`
    # ----- TYPES ----- #
    
    type Transaction {
        id: String!
        created_at: Int!
        sender_entity_handle: String!
        template_name: String!
        first_recipient_name: String
        first_recipient_email: String
        first_recipient_completed_at: Int 
        state: String!
        progress: Int!
        latest_state_change_at: Int!
        reviewer_names: [String]
    }

    # ----- QUERY ----- #
    
    type Query {
        transactions: [Transaction!]!
    }
`;
