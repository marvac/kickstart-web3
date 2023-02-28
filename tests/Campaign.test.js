const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ether/build/CampaignFactory.json');
const compiledCampaign = require('../ether/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;
let defaultAccount;
const defaultGas = '1000000';

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    defaultAccount = accounts[0];
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: defaultAccount, gas: defaultGas });
});