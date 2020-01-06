const bodyParser = require('body-parser');
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const abi = require('/contractabi.json');
const web3 = new Web3('https://ropsten.infura.io/v3/');

const contractAddress = '0x6e33bd4718812744414f8ff692f78ccea7f1cb1f';
const contract = new web3.eth.Contract(abi, contractAddress);

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index.html');
  });
  app.get('/about', function(req, res) {
    res.render('about.html');
  });

  app.get('/listall', function(req, res) {
    //res.render('about.html');
    console.log('listall...');
    // const getNumber = req.body.getNumber;
    contract.methods
      .getAllproducts()
      .call()
      .then(productes => {
        console.log(' Value productes: ' + productes);
        var response = {
          result: 'true',
          getLists: productes,
        };

        console.log('response : ' + response);
        res.status(200).json(response);
      }); // end of .then
  }); // end of app.post
};
