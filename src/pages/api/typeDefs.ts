import { gql } from 'graphql-tag';

export default gql`
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
        template_name: String!
    }

    # ----- QUERY ----- #
    
    type Query {
        transactions(params: String): [Transaction!]!
    }
`;
