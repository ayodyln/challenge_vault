"use strict";

/*
?   Coding Challenge: Halloween Sale
    Source: https://www.hackerrank.com/challenges/halloween-sale/

    You wish to buy video games from the famous online video game store Mist.

    Usually, all games are sold at the same price, dollars. 
    However, they are planning to have the seasonal Halloween 
    Sale next month in which you can buy games at a cheaper price. 
    Specifically, the first game will cost dollars, and every subsequent game will cost
    dollars less than the previous one. This continues until the cost 
    becomes less than or equal to dollars, after which every game will cost
    dollars. How many games can you buy during the Halloween Sale?   

    Example:
    p = 20;
    d = 3
    m = 6
    s = 70

    The following are the costs of the first 11, in order:

        20, 17, 14, 11, 8, 6, 6, 6, 6, 6, 6

    Start at `p = 20` units cost, reduce that by `d = 3`,
    units each iteration until reaching a minimum possible price,
    `m = 6`. Starting with `s = 70` units of currency in your Mist wallet,
    you can buy 5 games: 20 + 17 + 14 + 11 + 8 = 70

    Function Description:

    Complete the howManyGames function in the editor below.

    howManyGames has the following parameters:
        int p: the price of the first game
        int d: the discount from the previous game price
        int m: the minimum cost of a game
        int s: the starting budget
        
    Input Format:

    The first and only line of input contains four space-separated integers p, d, m, and s.

    ------- I/O Examples

    Sample Input: 20 3 6 80
    Sample Output 6
*/

/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p: number, d: number, m: number, s: number): number {
  // Return the number of games you can buy
}

export default howManyGames;
