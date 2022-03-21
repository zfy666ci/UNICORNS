const EXITABI=[
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_CryptoUnicornsAddress",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"_UnicornMilkTokenAddress",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"_TerminusAddress",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"_UnicornMilkStakingReward",
				"type":	"uint256"
			},
			{
				"internalType":	"uint256",
				"name":	"_StakePeriodSeconds",
				"type":	"uint256"
			},
			{
				"internalType":	"address",
				"name":	"_VRFCoordinatorAddress",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"_LinkTokenAddress",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"_ChainlinkVRFFee",
				"type":	"uint256"
			},
			{
				"internalType":	"bytes32",
				"name":	"_ChainlinkVRFKeyhash",
				"type":	"bytes32"
			}
		],
		"stateMutability":	"nonpayable",
		"type":	"constructor"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"staker",
				"type":	"address"
			}
		],
		"name":	"EnteredForest",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"staker",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"reward",
				"type":	"uint256"
			}
		],
		"name":	"ExitedForest",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"previousOwner",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"newOwner",
				"type":	"address"
			}
		],
		"name":	"OwnershipTransferred",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"sacrificer",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"terminusPoolId",
				"type":	"uint256"
			},
			{
				"indexed":	false,
				"internalType":	"bytes32",
				"name":	"requestId",
				"type":	"bytes32"
			}
		],
		"name":	"SacrificeCompleted",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"sacrificer",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"SacrificeOffered",
		"type":	"event"
	},
	{
		"inputs":	[
			
		],
		"name":	"chainlinkVRFFee",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"chainlinkVRFKeyhash",
		"outputs":	[
			{
				"internalType":	"bytes32",
				"name":	"",
				"type":	"bytes32"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"completeSacrifice",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"contractIsInitialized",
		"outputs":	[
			{
				"internalType":	"bool",
				"name":	"",
				"type":	"bool"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"cryptoUnicornsAddress",
		"outputs":	[
			{
				"internalType":	"address",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"sacrificer",
				"type":	"address"
			}
		],
		"name":	"currentSacrificeId",
		"outputs":	[
			{
				"internalType":	"bytes32",
				"name":	"",
				"type":	"bytes32"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"tokenAddress",
				"type":	"address"
			}
		],
		"name":	"drainERC20",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"exitForest",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"lootboxPoolIds",
		"outputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"",
				"type":	"uint256[3]"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_staker",
				"type":	"address"
			}
		],
		"name":	"numStaked",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"offerSacrifice",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"operator",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"from",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			},
			{
				"internalType":	"bytes",
				"name":	"data",
				"type":	"bytes"
			}
		],
		"name":	"onERC721Received",
		"outputs":	[
			{
				"internalType":	"bytes4",
				"name":	"",
				"type":	"bytes4"
			}
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"owner",
		"outputs":	[
			{
				"internalType":	"address",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes32",
				"name":	"requestId",
				"type":	"bytes32"
			},
			{
				"internalType":	"uint256",
				"name":	"randomness",
				"type":	"uint256"
			}
		],
		"name":	"rawFulfillRandomness",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"remainingShadowcornEggs",
		"outputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"",
				"type":	"uint256[3]"
			},
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"renounceOwnership",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"rescueUnicorn",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"sacrificer",
				"type":	"address"
			}
		],
		"name":	"resetSacrificeForSacrificer",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_fee",
				"type":	"uint256"
			}
		],
		"name":	"setChainlinkVRFFee",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes32",
				"name":	"_keyhash",
				"type":	"bytes32"
			}
		],
		"name":	"setChainlinkVRFKeyhash",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_CryptoUnicornsAddress",
				"type":	"address"
			}
		],
		"name":	"setCryptoUnicornsAddress",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"_LootboxPoolIds",
				"type":	"uint256[3]"
			}
		],
		"name":	"setLootboxPoolIds",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"_bonuses",
				"type":	"uint256[3]"
			}
		],
		"name":	"setShadowcornEggBonusesToUnicornMilk",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"_ShadowcornPoolIds",
				"type":	"uint256[3]"
			}
		],
		"name":	"setShadowcornPoolIds",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_StakePeriodSeconds",
				"type":	"uint256"
			}
		],
		"name":	"setStakePeriodSeconds",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_TerminusAddress",
				"type":	"address"
			}
		],
		"name":	"setTerminusAddress",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_UnicornMilkStakingReward",
				"type":	"uint256"
			}
		],
		"name":	"setUnicornMilkStakingReward",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"_UnicornMilkThresholds",
				"type":	"uint256[3]"
			}
		],
		"name":	"setUnicornMilkThresholds",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_UnicornMilkTokenAddress",
				"type":	"address"
			}
		],
		"name":	"setUnicornMilkTokenAddress",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"shadowcornEggBonusesToUnicornMilk",
		"outputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"",
				"type":	"uint256[3]"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"shadowcornPoolIds",
		"outputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"",
				"type":	"uint256[3]"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"stakePeriodSeconds",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"staker",
		"outputs":	[
			{
				"internalType":	"address",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"surrenderTerminusPools",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"terminusAddress",
		"outputs":	[
			{
				"internalType":	"address",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_staker",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"index",
				"type":	"uint256"
			}
		],
		"name":	"tokenOfStakerByIndex",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"newOwner",
				"type":	"address"
			}
		],
		"name":	"transferOwnership",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"unicornMilkStakingReward",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"unicornMilkThresholds",
		"outputs":	[
			{
				"internalType":	"uint256[3]",
				"name":	"",
				"type":	"uint256[3]"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"unicornMilkTokenAddress",
		"outputs":	[
			{
				"internalType":	"address",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"unstakesAt",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes32",
				"name":	"_requestId",
				"type":	"bytes32"
			}
		],
		"name":	"viewSacrifice",
		"outputs":	[
			{
				"components":	[
					{
						"internalType":	"uint32",
						"name":	"status",
						"type":	"uint32"
					},
					{
						"internalType":	"address",
						"name":	"sacrificer",
						"type":	"address"
					},
					{
						"internalType":	"uint256",
						"name":	"threshold",
						"type":	"uint256"
					},
					{
						"internalType":	"uint256",
						"name":	"randomness",
						"type":	"uint256"
					}
				],
				"internalType":	"struct DarkForest.Sacrifice",
				"name":	"",
				"type":	"tuple"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"tokenAddress",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"withdrawERC20",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	}
]

module.exports = EXITABI;