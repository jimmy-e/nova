import { TableData } from '@/types';
import { nArray } from '@/utils';
import generateTransaction from './generateTransaction';

// Create 1000 rows of mock transaction data
export const getMockDB = (): TableData => nArray(1000).map(() => generateTransaction());
