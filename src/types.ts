import { Dispatch, SetStateAction } from 'react';

export interface AppState {
  pageSize: StateMutable<PageSize>
  recipient: StateMutable<string | undefined>;
  reviewer: StateMutable<string | undefined>;
  state: StateMutable<string | undefined>;
}

export interface GetTransactionsData {
  transactions: TableData;
}

export interface GetTransactionsArgs {
  input: {
    page_size: PageSize;
    recipient_name?: string;
    reviewer_name?: string;
    state?: string;
  };
}

export type PageSize = 10 | 25 | 100;

export interface ServerContext {
  dataSources: {
    mockDB: TableData;
  };
}

export interface StateMutable<T> {
  state: T;
  setState: Dispatch<SetStateAction<T>>;
}

export type TableCell = Record<string, string>;

export type TableData = Array<Transaction>;

export interface TableRow {
  id: number;
  invited_by: string;
  last_updated: {
    days_ago: string;
    status: string;
  };
  recipient: {
    email: string;
    name: string;
  };
  reviewers: Array<string>;
  template: string;
  unique_id: string;
}

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

export type TransactionsQuery = (_: undefined, args: GetTransactionsArgs, context: ServerContext) => TableData;
