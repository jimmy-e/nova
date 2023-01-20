export interface Transaction {
  id: string;
  created_at: string;
  sender_entity_handle: string;
  template_name: string;
  first_recipient_name?: string;
  first_recipient_email?: string;
  first_recipient_completed_at?: string;
  state: string;
  progress: number;
  latest_state_change_at: string;
  reviewer_names?: string[];
}
