import { Dispatch, SetStateAction } from 'react';

export interface AppState {
  filters: {
    recipient: StateMutable<string | undefined>;
    reviewer: StateMutable<string | undefined>;
    state: StateMutable<string | undefined>;
  };
  pagination: {
    pageNumber: StateMutable<number>;
    pageSize: StateMutable<PageSize>
    validEntries: StateMutable<number>;
  };
}

export interface GetTransactionsData {
  transactions: TransactionsData;
}

export interface GetTransactionsArgs {
  input: {
    page_number: number;
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

export type TableRow = Record<string, number | string | Array<string> | TableCell>;

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
  template_child_name: string;
  template_name: string;
}

export type TransactionsData = {
  transactions: TableData;
  valid_entries: number;
}

export type TransactionsQuery = (_: undefined, args: GetTransactionsArgs, context: ServerContext) => TransactionsData;
