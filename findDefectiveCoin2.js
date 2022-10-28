import _ from 'lodash';

const LIGHTER = false;
const HEAVIER = true;
function findDefectiveCoin2(scale) {
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const groups = _.chunk(index, 3);
  const i = 1;
  const firstWeigh = true;
  return findDefectiveCoinRecursive(scale, i, groups, firstWeigh);
}

function findDefectiveCoinRecursive(scale, i, groups, firstWeigh) {
  let isFirstWeigh = false;
  if (firstWeigh === true) {
    isFirstWeigh = true;
  }
  const { left: result3CoinsLeft, right: result3CoinsRight } = scale.weigh(groups[0], groups[i]);
  if (result3CoinsLeft !== result3CoinsRight) {
    if (isFirstWeigh) {
      const { left: result3CoinsWeighed, right: result3CoinsNotWeighed } = scale.weigh(groups[0], groups[i + 1]);
      if (result3CoinsWeighed === result3CoinsNotWeighed) {
        return check3Coin(scale, result3CoinsLeft, result3CoinsRight, groups[i]);
      }
      return check3Coin(scale, result3CoinsWeighed, result3CoinsNotWeighed, groups[0]);
    }

    return check3Coin(scale, result3CoinsLeft, result3CoinsRight, groups[i]);
  }

  return findDefectiveCoinRecursive(scale, i + 1, groups);
}

function check3Coin(scale, result3CoinsLeft, result3CoinsRight, group) {
  let isLeftHeavier = false;
  if (result3CoinsLeft > result3CoinsRight) {
    isLeftHeavier = true;
  }

  const [coin1, coin2, coin3] = _.chunk(group);
  const { left: resultCoinLeft, right: resultCoinRight } = scale.weigh(coin1, coin2);

  if (resultCoinLeft === resultCoinRight) {
    return isLeftHeavier ? { index: coin3, heavierOrLighter: LIGHTER } : { index: coin3, heavierOrLighter: HEAVIER };
  }
  if (resultCoinLeft > resultCoinRight) {
    return isLeftHeavier ? { index: coin2, heavierOrLighter: LIGHTER } : { index: coin1, heavierOrLighter: HEAVIER };
  }
  return isLeftHeavier ? { index: coin1, heavierOrLighter: LIGHTER } : { index: coin2, heavierOrLighter: HEAVIER };
}
export default findDefectiveCoin2;
