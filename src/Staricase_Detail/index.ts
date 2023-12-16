function staircase(n: number): void {
  // Write your code here
  let memo = Array.from({ length: n }, () => " ");
  for (let i = 1; i <= memo.length; i++) {
    if (i === memo.length) memo[0] = "#";
    memo[memo.length - i] = "#";
    console.log(memo.join(""));
  }
}

function main() {
  staircase(7);
}

main();
