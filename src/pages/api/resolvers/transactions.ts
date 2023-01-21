import { TransactionsQuery } from '@/types';

const transactions: TransactionsQuery = (_, args, { dataSources }) => {
  const {
    // page,
    page_size,
    recipient_name,
    reviewer_name,
    state,
  } = args.input;

  console.log('-------------');
  console.log(page_size);
  console.log('-------------');

  let transactions = [...dataSources.mockDB].slice(0, page_size);

  if (recipient_name) {
    transactions = transactions.filter(
      (transaction) => transaction.first_recipient_name?.includes(recipient_name)
    );
  }

  if (reviewer_name) {
    transactions = transactions.filter(
      (transaction) => transaction.reviewer_names?.includes(reviewer_name)
    );
  }

  if (state) {
    transactions = transactions.filter((transaction) => transaction.state === state);
  }

  return transactions;
}

export default transactions;
