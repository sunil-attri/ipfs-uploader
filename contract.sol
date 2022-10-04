//SPDX-License-Identifier:Unlicensed
pragma solidity >0.5.0<0.9.0;
contract simple{

struct userData{
    uint totalUploads;
    string[] hashes;
    string[] fileNames;

}

mapping(address=>userData) public dataMapped;

function setData(string memory newHash,string memory fileName) public {
    dataMapped[msg.sender].hashes.push(newHash);
    dataMapped[msg.sender].fileNames.push(fileName);

}

function getData() public returns(uint,string[] memory,string[] memory){
    return (dataMapped[msg.sender].hashes.length,dataMapped[msg.sender].hashes,dataMapped[msg.sender].fileNames);
    
}

}