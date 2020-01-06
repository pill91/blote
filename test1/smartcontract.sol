pragma solidity ^0.4.18;

contract agricultureContract {

    mapping (uint8 => string) productList;
    uint8 numberOfProducts; // 총 제품의 수입니다.
    address contractOwner;

    struct myStruct {
        string id;
        string password;
        string email;
    }
    
    event Instructor(
       		uint8 numberOfProducts
    	);

    myStruct[] public productes;

    constructor() public {        
        contractOwner = msg.sender;
    }

    function addProStru (string _id, string _password, string _email) public {
        bool add = true;
        for (uint8 i = 0; i < numberOfProducts; i++) {
        
            // 문자열 비교는 해쉬함수(sha3)를 통해서 할 수 있습니다.
            if(keccak256(productes[i].id) == keccak256(_id)){
                add = false; break;
            }
        }

        if(add) {
            productes.push(myStruct(_id,_password,_email)) -1;
        numberOfProducts++;
        emit Instructor(numberOfProducts);
           
        }
    }

    //제품 등록의 수를 리턴합니다.
    function getNumOfProducts() public constant returns(uint8) {
        return numberOfProducts;
    }

    //번호에 해당하는 제품의 이름을 리턴합니다.
    function getProductStruct(uint _index) public view returns (string, string, string) {
        return (productes[_index].id, productes[_index].password, productes[_index].email);
    }

    //컨트랙트를 삭제합니다.
    function killContract() public {
        if(contractOwner == msg.sender)
            selfdestruct(contractOwner);
    }
}