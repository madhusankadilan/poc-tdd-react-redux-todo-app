// This method format the given string by replacing empty spaces with underscores
// and convert the final string into lowercase
export const stringFormat01 = (str: string) => {
   return str.split(' ').join('_').toLowerCase();
}