import _ from 'lodash';
import findDefectiveCoin from './findDefectiveCoin.js';
import findDefectiveCoin2 from './findDefectiveCoin2.js';

const NUMBER_OF_COINS = 12;
const NORMAL_WEIGHT = 1;
const HEAVY_WEIGHT = 2;
const LIGHT_WEIGHT = 0;
const HEAVIER = 1;
const LIGHTER = -1;
const EQUAL = 0;
const isHeavier = true;
const isLighter = false;
class Scale {
  constructor() {
    let coins = [];
    // create 11 normal coins
    for (let i = 0; i < NUMBER_OF_COINS - 1; i += 1) {
      coins.push({
        weightOfCoin: NORMAL_WEIGHT,
      });
    }

    // random weight of defective coin (heavier or lighter)
    const defectiveWeight = [HEAVY_WEIGHT, LIGHT_WEIGHT];
    const weightOfDefectiveCoin = defectiveWeight[Math.floor(Math.random() * defectiveWeight.length)];

    coins.push({
      weightOfCoin: weightOfDefectiveCoin,
    });
    // shuffle the coins
    coins = _.shuffle(coins);

    this.coins = coins;
    this.isChecked = false;
  }

  weigh(lefts, rights) {
    const weightOfLefts = lefts.map(item => this.coins[item].weightOfCoin);
    const weightOfRights = rights.map(item => this.coins[item].weightOfCoin);

    // calculate the total weight of coins of left and right
    const totalWeightOfLeft = weightOfLefts.reduce((weightOfPreviousCoin, weightOfCurrentCoin) => {
      const total = weightOfPreviousCoin + weightOfCurrentCoin;
      return total;
    });

    const totalWeightOfRight = weightOfRights.reduce((weightOfPreviousCoin, weightOfCurrentCoin) => {
      const total = weightOfPreviousCoin + weightOfCurrentCoin;
      return total;
    });

    // compare the weight of left and right
    if (totalWeightOfLeft > totalWeightOfRight) {
      return { left: HEAVIER, right: LIGHTER };
    }

    if (totalWeightOfLeft < totalWeightOfRight) {
      return { left: LIGHTER, right: HEAVIER };
    }

    return { left: EQUAL, right: EQUAL };
  }

  checkResult(idOfCoin, heavierOrLighter) {
    if (this.isChecked === true) {
      return 'Error. Can not check';
    }

    this.isChecked = true;
    const weight = this.coins[idOfCoin].weightOfCoin;

    // check if the coin is heavier
    if (weight > NORMAL_WEIGHT && heavierOrLighter === isHeavier) {
      return true;
    }

    // check if the coin is lighter
    if (weight < NORMAL_WEIGHT && heavierOrLighter === isLighter) {
      return true;
    }

    return false;
  }
}

function testFindDefectiveCoin() {
  let count = 0;
  for (let i = 0; i < 10; i += 1) {
    const scale = new Scale();
    const { index, heavierOrLighter } = findDefectiveCoin2(scale);
    if (!scale.checkResult(index, heavierOrLighter)) {
      count += 1;
    }
  }
  console.log(count);
}
testFindDefectiveCoin();
