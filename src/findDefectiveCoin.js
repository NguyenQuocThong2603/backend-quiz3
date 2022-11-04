import _ from 'lodash';

const LIGHTER = false;
const HEAVIER = true;
const NORMAL_WEIGHT = 0;
function findDefectiveCoin(scale) {
  // divide 12 coins into 3 groups 4 coin;
  let group1 = [0, 1, 2, 3];
  let group2 = [4, 5, 6, 7];
  const group3 = [8, 9, 10, 11];

  // weigh 2 groups 4 coins randomly
  const { left: resultOf4CoinsLeft, right: resultOf4CoinsRight } = scale.weigh(group1, group2);

  // if the result is equal
  if (resultOf4CoinsLeft === resultOf4CoinsRight) {
    // choose 3 coins in 1 of 2 group that was weighed and 3 coins of group that wasn't weighed
    const [group3CoinsWeighed, coinRemainingOfGroup4CoinsWeighed] = _.chunk(group1, 3);
    const [group3CoinsNotWeighed, coinRemainingOfGroup4CoinsNotWeighed] = _.chunk(group3, 3);

    // weigh 2 groups 3 coins
    const { left: resultOf3CoinsLeft, right: resultOf3CoinsRight } = scale.weigh(
      group3CoinsWeighed,
      group3CoinsNotWeighed,
    );

    // if the result of weighing 2 groups 3 coins is equal
    if (resultOf3CoinsLeft === resultOf3CoinsRight) {
      const { right: coinRight } = scale.weigh(
        coinRemainingOfGroup4CoinsWeighed,
        coinRemainingOfGroup4CoinsNotWeighed,
      );
      if (coinRight < NORMAL_WEIGHT) {
        return { index: coinRemainingOfGroup4CoinsNotWeighed, heavierOrLighter: LIGHTER };
      }
      return { index: coinRemainingOfGroup4CoinsNotWeighed, heavierOrLighter: HEAVIER };
    }
    // if the result of weighing 2 groups 3 coins is not equal
    let isLighter = false;
    const [coin1, coin2, coin3] = _.chunk(group3CoinsNotWeighed, 1);
    const { left: resultCoinLeft, right: resultCoinRight } = scale.weigh(coin1, coin2);
    if (resultOf3CoinsLeft > resultOf3CoinsRight) {
      isLighter = true;
    }
    // weigh 2 coin in group was'n weighed
    return check3Coin(coin1, coin2, coin3, isLighter, resultCoinLeft, resultCoinRight);
  }

  // if the result of weighing 4 coins is not equal
  if (resultOf4CoinsLeft < resultOf4CoinsRight) {
    const temp = group1;
    group1 = group2;
    group2 = temp;
  }
  // Divide 4 coins of each side into 2 groups of 2 coins
  const [group1Of2CoinsLeft, group2Of2CoinsLeft] = _.chunk(group1, 2);
  const [group1Of2CoinsRight, group2Of2CoinsRight] = _.chunk(group2, 2);

  // divide 2 coin of left side into two group
  const [firstCoinOfGroup2CoinOne, secondCoinOfGroup2CoinTwo] = _.chunk(group1Of2CoinsLeft, 1);

  // Create 2 two by choosing 2 coins on the right and 1 coin on the left into a group
  let group3CoinsLeft = group1Of2CoinsRight.concat(firstCoinOfGroup2CoinOne);
  let group3CoinsRight = group2Of2CoinsRight.concat(secondCoinOfGroup2CoinTwo);

  // weigh two group after creating
  const { left: resultOf3CoinsLeft, right: resultOf3CoinsRight } = scale.weigh(group3CoinsLeft, group3CoinsRight);

  if (resultOf3CoinsLeft === resultOf3CoinsRight) {
    const [coin1, coin2] = _.chunk(group2Of2CoinsLeft, 1);
    const coin3 = [group3CoinsLeft[0]];

    const { left: resultCoinLeft, right: resultCoinRight } = scale.weigh(coin1, coin3);

    if (resultCoinLeft === resultCoinRight) {
      return { index: coin2, heavierOrLighter: HEAVIER };
    }
    return { index: coin1, heavierOrLighter: HEAVIER };
  }

  if (resultOf3CoinsLeft < resultOf3CoinsRight) {
    const temp = group3CoinsLeft;
    group3CoinsLeft = group3CoinsRight;
    group3CoinsRight = temp;
  }
  const coin1 = [group3CoinsLeft[2]];
  const [coin2, coin3] = _.chunk(group3CoinsRight, 1);
  const { left: resultCoinLeft, right: resultCoinRight } = scale.weigh(coin2, coin3);

  if (resultCoinLeft === resultCoinRight) {
    return { index: coin1, heavierOrLighter: HEAVIER };
  }
  if (resultCoinLeft > resultCoinRight) {
    return { index: coin3, heavierOrLighter: LIGHTER };
  }
  return { index: coin2, heavierOrLighter: LIGHTER };
}

function check3Coin(coin1, coin2, coin3, isLighter, resultCoinLeft, resultCoinRight) {
  if (resultCoinLeft === resultCoinRight) {
    return isLighter ? { index: coin3, heavierOrLighter: LIGHTER } : { index: coin3, heavierOrLighter: HEAVIER };
  }
  if (resultCoinLeft > resultCoinRight) {
    return isLighter ? { index: coin2, heavierOrLighter: LIGHTER } : { index: coin1, heavierOrLighter: HEAVIER };
  }
  return isLighter ? { index: coin1, heavierOrLighter: LIGHTER } : { index: coin2, heavierOrLighter: HEAVIER };
}
export { findDefectiveCoin, check3Coin };
