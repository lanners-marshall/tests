// We can implement a naive recursive algorithm to display the nth Fibonacci number with the following code:

let naiveNthFib = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return naiveNthFib(n-1) + naiveNthFib(n-2);
}

// Implement a more efficient implementation that can handle n values at least up to 1000.

let iterativeFib = (num) => {
  let a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--
  }
  return b
}

let memFib = (num, memo) => {
  memo = memo || {}

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = memFib(num - 1, memo) + memFib(num - 1, memo);

}

iterativeFib(1000)
memFib(1000)