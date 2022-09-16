// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract FakeNFTMarketplace {
    mapping(uint256 => address) public tokens; //mapping of Fake TokenID to Owner addresses

    uint256 nftPrice = 0.1 ether;

    function purchase(uint256 _tokenId) external payable {
        require(msg.value == nftPrice, "This NFT costs 0.1 ether");
        tokens[_tokenId] = msg.sender;
    }

    function getPrice() external view returns (uint256) {
        return nftPrice;
    }

    // available function will check whether given tokenId has already been sold or not
    function available(uint256 _tokenId) external view returns (bool) {
        if (tokens[_tokenId] == address(0)) {
            return true;
        }
        return false;
    }
}

// contract address = 0x861a1B61bA3D900a5534aA0A82Fb4C0133B8d099
