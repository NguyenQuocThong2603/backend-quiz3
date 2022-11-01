import _ from 'lodash';
import chai from 'chai';
import Scale from '../src/scale.js';

const should = chai.should();
describe('Test constructor of scale', () => {
  it('it should create a scale and 11 normal coins and 1 defective coin', () => {
    const scale = new Scale();
    const defectiveCoin = scale.coins.find(element => element.weightOfCoin !== 1);
    const normalCoin = scale.coins.filter(element => element.weightOfCoin === 1);
    normalCoin.length.should.equal(11);
    scale.coins.length.should.equal(12);
    defectiveCoin.should.be.a('object');
  });
});

describe('Test weigh function of scale', () => {
  it('it should return a object has 2 property is left and right, the side heavier is one, the side lighter is -1, if equal is both 0', () => {
    const scale = new Scale();
    const indexOfCoins = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const groups = _.chunk(indexOfCoins, 4);
    const weightOfLefts = groups[0].map(item => scale.coins[item].weightOfCoin);
    const weightOfRights = groups[1].map(item => scale.coins[item].weightOfCoin);
    const totalWeightOfLeft = weightOfLefts.reduce((previousCoin, currentCoin) => previousCoin + currentCoin);
    const totalWeightOfRight = weightOfRights.reduce((previousCoin, currentCoin) => previousCoin + currentCoin);
    const { left: resultOfLeft, right: resultOfRight } = scale.weigh(groups[0], groups[1]);
    if (totalWeightOfLeft > totalWeightOfRight) {
      resultOfLeft.should.equal(1);
      resultOfRight.should.equal(-1);
    }
    if (totalWeightOfLeft < totalWeightOfRight) {
      resultOfLeft.should.equal(-1);
      resultOfRight.should.equal(1);
    }
    if (totalWeightOfLeft === totalWeightOfRight) {
      resultOfLeft.should.equal(0);
      resultOfRight.should.equal(0);
    }
  });
});

describe('Test checkResult function of scale', () => {
  it('it should return true if the index of defective coin is correct', () => {
    const scale = new Scale();
    const indexOfDefectiveCoin = scale.coins.findIndex(coin => coin.weightOfCoin !== 1);
    const weightOfDefectiveCoin = scale.coins.find(coin => coin.weightOfCoin !== 1);
    let isHeavier = false;
    if (weightOfDefectiveCoin > 1) {
      isHeavier = true;
    }
    scale.checkResult(indexOfDefectiveCoin, isHeavier).should.equal(true);
  });

  it('it should return false if the index of defective coin is wrong', () => {
    const scale = new Scale();
    const indexOfNormalCoin = scale.coins.findIndex(coin => coin.weightOfCoin === 1);
    const weightOfDefectiveCoin = scale.coins.find(coin => coin.weightOfCoin !== 1);
    let isHeavier = false;
    if (weightOfDefectiveCoin > 1) {
      isHeavier = true;
    }
    scale.checkResult(indexOfNormalCoin, isHeavier).should.equal(false);
  });
});
