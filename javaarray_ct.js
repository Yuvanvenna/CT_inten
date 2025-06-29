function first(arr, n) {
  if (n == null) {
    return arr[0];
  }
  if (n < 0) {
    return [];
  }
  return arr.slice(0, n);
}
