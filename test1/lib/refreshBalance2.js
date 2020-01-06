function refreshBalance() {
  document.getElementById('tablePlace').innerText = ' ';
  let idiv = document.createElement('div');
  document.getElementById('tablePlace').appendChild(idiv);
  let list = web3.eth.accounts;
  let total = 0;
  let input = '<table>';
  let save; //새로운 주소가 들어올 변수
  for (let i = 0; i < list.length; i++) {
    let tempB = parseFloat(web3.fromWei(web3.eth.getBalance(list[i]), 'ether'));
    input += '<tr><td>' + list[i] + '</td><td>' + tempB + ' ETHER</td></tr>';
    total += tempB;
  }
  input += "<h5> TOTAL <font color='red'>" + total + ' ETHER</font>';
  idiv.innerHTML = input;
  web3.eth.filter('latest').watch(function() {
    refreshBalance();
  });
}

function newAccount() {
  web3.personal.newAccount('eth');
  //window.location.reload();
  console.log(count);
  ethSend();
  //location.href = 'vote.html';
}

function ethSend() {
  let accountCount = count - '0';
  let admin = web3.eth.accounts[0];
  let vote = web3.eth.accounts[accountCount];
  let amount = web3.toWei(1.1, 'ether');
  web3.personal.unlockAccount(admin, '123');
  if (web3.personal.unlockAccount(web3.eth.accounts[0], '123', 0)) {
    let result = web3.eth.sendTransaction({
      from: admin,
      to: vote,
      value: amount,
    });
  }
}

function selectAccount1() {
  let accountCount = count - '1';
  let vote = web3.eth.accounts[accountCount];
  let candidate1 = web3.eth.accounts[0];
  let amount = web3.toWei(1, 'ether');
  web3.personal.unlockAccount(vote, 'eth');
  if (web3.personal.unlockAccount(web3.eth.accounts[accountCount], 'eth')) {
    let result = web3.eth.sendTransaction({
      from: vote,
      to: candidate1,
      value: amount,
    });
    //document.getElementById('a').innerText = result;
    alert(result);
  }
}
