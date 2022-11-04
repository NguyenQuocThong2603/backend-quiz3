import _ from 'lodash';
import chai from 'chai';
import Scale from '../src/scale.js';
import { findDefectiveCoin2, check3Coin, check3CoinKnowHeavierOrLighter } from '../src/findDefectiveCoin2.js';

const should = chai.should();
const NORMAL_WEIGHT = 1;
const HEAVIER = true;
const LIGHTER = false;

describe('test check3Coin function of findDefectiveCoin2', () => {
  it('if result 3 coins left > result of 3 coins right, it should return the index of defective coin and the variable heavierOrLighter with lighter value vice versa', () => {
    const scale = new Scale();
    const normalCoin1 = _.findIndex(scale.coins, coin => coin.weightOfCoin === NORMAL_WEIGHT);
    const normalCoin2 = _.findIndex(scale.coins, coin => coin.weightOfCoin === NORMAL_WEIGHT, normalCoin1 + 1);
    const indexOfDefectiveCoin = _.findIndex(scale.coins, coin => coin.weightOfCoin !== NORMAL_WEIGHT);
    const defectiveCoin = _.find(scale.coins, coin => coin.weightOfCoin !== NORMAL_WEIGHT);
    let result3CoinsLeft = 1;
    let result3CoinsRight = -1;
    if (defectiveCoin.weightOfCoin > 1) {
      result3CoinsLeft = -1;
      result3CoinsRight = 1;
    }
    const group = _.shuffle([normalCoin1, normalCoin2, indexOfDefectiveCoin]);
    const { index, heavierOrLighter } = check3Coin(scale, result3CoinsLeft, result3CoinsRight, group);
    index[0].should.equal(indexOfDefectiveCoin);
    if (defectiveCoin.weightOfCoin > 1) {
      heavierOrLighter.should.equal(HEAVIER);
    } else {
      heavierOrLighter.should.equal(LIGHTER);
    }
  });
});

describe('test check3CoinKnowHeavierOrLighter function', () => {
  it('if isHeavier is true, it should return array of index of defective coin and show the coin is heavier vice versa', () => {
    const scale = new Scale();
    const normalCoin1 = _.findIndex(scale.coins, coin => coin.weightOfCoin === NORMAL_WEIGHT);
    const normalCoin2 = _.findIndex(scale.coins, coin => coin.weightOfCoin === NORMAL_WEIGHT, normalCoin1 + 1);
    const indexOfDefectiveCoin = _.findIndex(scale.coins, coin => coin.weightOfCoin !== NORMAL_WEIGHT);
    const defectiveCoin = _.find(scale.coins, coin => coin.weightOfCoin !== NORMAL_WEIGHT);
    let isHeavier = false;
    if (defectiveCoin.weightOfCoin > 1) {
      isHeavier = true;
    }
    const group = _.shuffle([normalCoin1, normalCoin2, indexOfDefectiveCoin]);
    const { index, heavierOrLighter } = check3CoinKnowHeavierOrLighter(scale, isHeavier, group);
    index[0].should.equal(indexOfDefectiveCoin);
    if (defectiveCoin.weightOfCoin > 1) {
      heavierOrLighter.should.equal(HEAVIER);
    } else {
      heavierOrLighter.should.equal(LIGHTER);
    }
  });
});

describe('test findDefectiveCoin2 function', () => {
  it('The count of failure test is must be zero', () => {
    let count = 0;
    for (let i = 0; i < 1000; i += 1) {
      const scale = new Scale();
      const { index, heavierOrLighter } = findDefectiveCoin2(scale);
      if (!scale.checkResult(index, heavierOrLighter)) {
        count += 1;
      }
    }
    count.should.equal(0);
  });
});
