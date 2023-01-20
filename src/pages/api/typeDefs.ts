import { gql } from 'graphql-tag';

export default gql`
    # ----- TYPES ----- #
    
    type Transaction {
        id: String!
        created_at: String!
        sender_entity_handle: String!
        template_name: String!
        first_recipient_name: String
        first_recipient_email: String
        first_recipient_completed_at: String
        state: String!
        progress: Int!
        latest_state_change_at: String!
        reviewer_names: [String]
    }

    # ----- QUERY ----- #
    
    type Query {
        transactions: [Transaction!]!
    }
`;
