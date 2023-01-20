export type MockDB = Array<Transaction>;

export interface ServerContext {
  dataSources: {
    mockDB: MockDB;
  };
}

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

export type TransactionsQuery = (_: undefined, args: TransactionsArgs, context: ServerContext) => MockDB;

export interface TransactionsArgs {
  page: number;
  page_size: number;
  recipient_name: string;
  reviewer_name: string;
  state: string;
}
