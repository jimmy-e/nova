import { TransactionsQuery } from '@/types';

const transactions: TransactionsQuery = (_, args, { dataSources }) => {
  const {
    // page,
    // page_size,
    recipient_name,
    reviewer_name,
    state,
  } = args.input;

  console.log('///////////');
  // console.log(args);
  console.log(recipient_name);
  console.log(reviewer_name);
  console.log(state);
  console.log('///////////');

  return dataSources.mockDB;
}

export default transactions;
