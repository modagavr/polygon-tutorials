//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CryptusToken is ERC20 {
    constructor() ERC20("CryptusToken", "CRYPTUS") {
        _mint(msg.sender, 10000 * 10**decimals());
    }
}
