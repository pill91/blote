function refreshBalance() {
  // tablePlace를 초기화하고 계좌수 만큼 테이블의 행을 생성합니다.
  document.getElementById('tablePlace').innerText = ' ';
  let idiv = document.createElement('div');
  document.getElementById('tablePlace').appendChild(idiv);
  let list = web3.eth.accounts;
  let total = 0;
  let input = '<table>';
  let save; //새로운 주소가 들어올 변수
  for (let i = 0; i < list.length; i++) {
    let tempB = parseFloat(web3.fromWei(web3.eth.getBalance(list[i]), 'ether'));
    //console.log('Account:('+tempB+')');
    input += '<tr><td>' + list[i] + '</td><td>' + tempB + ' ETHER</td></tr>';
    total += tempB;
  }
  input += "<h5> TOTAL <font color='red'>" + total + ' ETHER</font>';
  idiv.innerHTML = input;
  web3.eth.filter('latest').watch(function() {
    refreshBalance();
  });
}

// function makefromSelect() {
//   let list = web3.eth.accounts;
//   let select = document.getElementById('fromaccounts');
//   for (let i = 0; i < list.length; i++) {
//     let opt = document.createElement('option');
//     opt.value = list[i];
//     opt.innerHTML = list[i];
//     select.appendChild(opt);
//   }
// }

// function maketoSelect() {
//   let list = web3.eth.accounts;
//   let select = document.getElementById('toaccounts');
//   for (let i = 0; i < list.length; i++) {
//     let opt = document.createElement('option');
//     opt.value = list[i];
//     opt.innerHTML = list[i];
//     select.appendChild(opt);
//   }
// }

function newAccount() {
  web3.personal.newAccount('eth');
  window.location.reload();
  console.log(count);
  ethSend();
}

function ethSend() {
  let accountCount = count - '0';
  let admin = web3.eth.accounts[0];
  let vote = web3.eth.accounts[accountCount];
  let amount = web3.toWei(1, 'ether');
  web3.personal.unlockAccount(admin, '123');
  if (web3.personal.unlockAccount(web3.eth.accounts[0], '123', 0)) {
    let result = web3.eth.sendTransaction({
      from: admin,
      to: vote,
      value: amount,
    });
    document.getElementById('a').innerText = result;
  }
}

function addProduct() {
  let accountCount = count - '0';
  let admin = web3.eth.accounts[0];
  let vote = web3.eth.accounts[accountCount];
  let amount = web3.fromWei(1, 'ether');

  if (web3.personal.unlockAccount(admin, '123')) {
    vc.sendEther(
      accountCount,
      admin,
      vote,
      amount,
      { from: admin, gas: 2000000 },
      function(err, result) {
        if (!err) alert('트랜잭션을 보냄\n');
      },
    );
  }
}
