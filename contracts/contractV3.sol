// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./contractV2.sol";

contract contractV3 is contractV2 {
    function decreaseValue(uint256 _value) public {
        value -= _value;
    } 
}