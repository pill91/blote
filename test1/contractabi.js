var abi = [
  {
    constant: false,
    inputs: [
      {
        name: 'bote',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'call',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_accountCount',
        type: 'uint256',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
      {
        name: '_sender',
        type: 'string',
      },
      {
        name: '_bote',
        type: 'string',
      },
    ],
    name: 'ethSend',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
