import { TransactionsQuery } from '@/types';

const transactions: TransactionsQuery = (_, args, { dataSources }) => {
  const {
    page,
    page_size,
    recipient_name,
    reviewer_name,
    state,
  } = args;

  return dataSources.mockDB;
}

export default transactions;
