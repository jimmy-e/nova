import { Transaction } from '@/types';
import { nArray } from '@/utils';
import generateTransaction from '@/pages/api/resolvers/utils/generateTransaction';

// Create 1000 rows of mock transaction data
export const getMockDB = (): Array<Transaction> => nArray(1000).map(() => generateTransaction());
