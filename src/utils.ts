export const arrayRandom = (array: Array<any>): any => array[Math.floor(Math.random() * array.length)];

export const nArray = (n: number): Array<null> => Array.from(Array(n));
