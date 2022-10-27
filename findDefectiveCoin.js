import _ from 'lodash';

function findDefectiveCoin(scale) {
  // split 12 coins into 3 groups 4 coin;
  const indexOf12Coins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const group1 = [0, 1, 2, 3];
  const group2 = [4, 5, 6, 7];
  const group3 = [8, 9, 10, 11];

  // compare 2 groups 4 coin randomly
  const { resultOf4CoinsLeft, resultOf4CoinsRight } = scale.weight(group1, group2);

  // if the result is equal
  if (resultOf4CoinsLeft === resultOf4CoinsRight) {
    // choose 3 coins in 1 group
    const group3CoinsLeft = [0, 1, 2];
    const group3CoinsNotWeight = [8, 9, 10];
    const { resultOf3CoinsLeft, resultOf3CoinsRight } = scale.weight(group3CoinsLeft, group3CoinsNotWeight);

    if (resultOf3CoinsLeft === resultOf3CoinsRight) {
      scale.weight();
    }
  }
}

export default findDefectiveCoin;
