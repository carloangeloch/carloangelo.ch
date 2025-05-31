export const sorted = (a: any, b: any) => {
  if (b.year !== a.year) {
    return b.year - a.year;
  }
  return b.month - a.month;
};
