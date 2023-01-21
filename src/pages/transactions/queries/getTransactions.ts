import { gql } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
  query transactions($input: TransactionsInput) {
      transactions(input: $input) {
          transactions {
              id
              created_at
              first_recipient_completed_at
              first_recipient_email
              first_recipient_name
              invited_by
              latest_state_change_at
              progress
              reviewer_names
              sender_entity_handle
              state
              template_child_name
              template_name
          }
          valid_entries
      }
  }
`;
