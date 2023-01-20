import { Dispatch, SetStateAction } from 'react';

export interface AppState {
  search: {
    state?: string;
    setState: Dispatch<SetStateAction<string | undefined>>;
  };
}

export interface GetTransactionsData {
  transactions: TableData;
}

export interface ServerContext {
  dataSources: {
    mockDB: TableData;
  };
}

export type TableData = Array<Transaction>;

export interface Transaction {
  id: string;
  created_at: string;
  first_recipient_completed_at?: string;
  first_recipient_email?: string;
  first_recipient_name?: string;
  invited_by: string;
  latest_state_change_at: string;
  progress: number;
  reviewer_names?: string[];
  sender_entity_handle: string;
  state: string;
  template_name: string;
}

export type TransactionsQuery = (_: undefined, args: TransactionsArgs, context: ServerContext) => TableData;

export interface TransactionsArgs {
  page: number;
  page_size: number;
  recipient_name: string;
  reviewer_name: string;
  state: string;
}
