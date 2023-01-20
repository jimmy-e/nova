import { gql } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
  query transactions {
      transactions(params: "foo") {
          id
          created_at
          sender_entity_handle
          template_name
          first_recipient_name
          first_recipient_email
          first_recipient_completed_at
          state
          progress
          latest_state_change_at
          reviewer_names
      }
  }
`;
