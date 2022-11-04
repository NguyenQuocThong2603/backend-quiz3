import _ from 'lodash';
import chai from 'chai';
import Scale from '../src/scale.js';
import { findDefectiveCoin, check3Coin } from '../src/findDefectiveCoin.js';

const should = chai.should();
const HEAVIER = true;
const LIGHTER = false;
const DRAW = 0;

describe('test check3Coin function', () => {
  it('The defective coin is lighter and weight of coin1 = weight of coin2, it should return index of coin 1 and the variable heavierOrLighter with lighter value', () => {
    const isLighter = true;
    const coin1 = 0;
    const coin2 = 1;
    const coin3 = 2;
    const resultCoinLeft = DRAW;
    const resultCoinRight = DRAW;
    const { index, heavierOrLighter } = check3Coin(coin1, coin2, coin3, isLighter, resultCoinLeft, resultCoinRight);
    index.should.equal(coin3);
    heavierOrLighter.should.equal(LIGHTER);
  });

  it('The defective coin is lighter and weight of coin s1 > weight of coin 2, it should return index of coin 1 and the variable heavierOrLighter with lighter value', () => {
    const isLighter = true;
    const coin1 = 0;
    const coin2 = 1;
    const coin3 = 2;
    const resultCoinLeft = 1;
    const resultCoinRight = -1;
    const { index, heavierOrLighter } = check3Coin(coin1, coin2, coin3, isLighter, resultCoinLeft, resultCoinRight);
    index.should.equal(coin2);
    heavierOrLighter.should.equal(LIGHTER);
  });

  it('The defective coin is lighter and weight of coin 1 < weight of coin 2, it should return index of coin 1 and the variable heavierOrLighter with lighter value', () => {
    const isLighter = true;
    const coin1 = 0;
    const coin2 = 1;
    const coin3 = 2;
    const resultCoinLeft = -1;
    const resultCoinRight = 1;
    const { index, heavierOrLighter } = check3Coin(coin1, coin2, coin3, isLighter, resultCoinLeft, resultCoinRight);
    index.should.equal(coin1);
    heavierOrLighter.should.equal(LIGHTER);
  });

  it('The defective coin is heavier and weight of coin 1 = weight of coin 2, it should return index of coin 1 and the variable heavierOrLighter with heavier value', () => {
    const isLighter = false;
    const coin1 = 0;
    const coin2 = 1;
    const coin3 = 2;
    const resultCoinLeft = DRAW;
    const resultCoinRight = DRAW;
    const { index, heavierOrLighter } = check3Coin(coin1, coin2, coin3, isLighter, resultCoinLeft, resultCoinRight);
    index.should.equal(coin3);
    heavierOrLighter.should.equal(HEAVIER);
  });

  it('The defective coin is heavier and weight of coin 1 > weight of coin 2, it should return index of coin 1 and the variable heavierOrLighter with heavier value', () => {
    const isLighter = false;
    const coin1 = 0;
    const coin2 = 1;
    const coin3 = 2;
    const resultCoinLeft = 1;
    const resultCoinRight = -1;
    const { index, heavierOrLighter } = check3Coin(coin1, coin2, coin3, isLighter, resultCoinLeft, resultCoinRight);
    index.should.equal(coin1);
    heavierOrLighter.should.equal(HEAVIER);
  });

  it('The defective coin is heavier and weight of coin1 < weight of coin2, it should return index of coin 2 and the variable heavierOrLighter with heavier value', () => {
    const isLighter = false;
    const coin1 = 0;
    const coin2 = 1;
    const coin3 = 2;
    const resultCoinLeft = -1;
    const resultCoinRight = 1;
    const { index, heavierOrLighter } = check3Coin(coin1, coin2, coin3, isLighter, resultCoinLeft, resultCoinRight);
    index.should.equal(coin2);
    heavierOrLighter.should.equal(HEAVIER);
  });
});

describe('test findDefectiveCoin function', () => {
  it('The count of failure test is must be zero', () => {
    let count = 0;
    for (let i = 0; i < 1000; i += 1) {
      const scale = new Scale();
      const { index, heavierOrLighter } = findDefectiveCoin(scale);
      if (!scale.checkResult(index, heavierOrLighter)) {
        count += 1;
      }
    }
    count.should.equal(0);
  });
});
