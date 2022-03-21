const ERC721ABI = [
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"owner",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"approved",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"Approval",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"owner",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"operator",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"bool",
				"name":	"approved",
				"type":	"bool"
			}
		],
		"name":	"ApprovalForAll",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"from",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"to",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"Transfer",
		"type":	"event"
	},
	{
		"inputs":	[
			{
				"internalType":	"address[]",
				"name":	"addresses",
				"type":	"address[]"
			},
			{
				"internalType":	"uint8",
				"name":	"mintAllowance",
				"type":	"uint8"
			}
		],
		"name":	"addWhiteListAddresses",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"to",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"approve",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"owner",
				"type":	"address"
			}
		],
		"name":	"balanceOf",
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
				"internalType":	"string",
				"name":	"_contractURI",
				"type":	"string"
			}
		],
		"name":	"changeContractURI",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"string",
				"name":	"_licenseURI",
				"type":	"string"
			}
		],
		"name":	"changeLicenseURI",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_to",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"_numTokens",
				"type":	"uint256"
			}
		],
		"name":	"claimGenesisTokens",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"contractURI",
		"outputs":	[
			{
				"internalType":	"string",
				"name":	"",
				"type":	"string"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"genesisEggsMax",
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
		"name":	"getApproved",
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
				"name":	"_tokenId",
				"type":	"uint256"
			}
		],
		"name":	"getDNA",
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
				"name":	"_address",
				"type":	"address"
			}
		],
		"name":	"getMintAllowance",
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
				"name":	"owner",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"operator",
				"type":	"address"
			}
		],
		"name":	"isApprovedForAll",
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
		"name":	"license",
		"outputs":	[
			{
				"internalType":	"string",
				"name":	"",
				"type":	"string"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_to",
				"type":	"address"
			}
		],
		"name":	"mint",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"name",
		"outputs":	[
			{
				"internalType":	"string",
				"name":	"",
				"type":	"string"
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
		"name":	"ownerOf",
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
		"name":	"presaleHatchingUnlockTime",
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
		"name":	"presaleUnlockTime",
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
				"name":	"from",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"to",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"safeTransferFrom",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"from",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"to",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			},
			{
				"internalType":	"bytes",
				"name":	"_data",
				"type":	"bytes"
			}
		],
		"name":	"safeTransferFrom",
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
				"internalType":	"bool",
				"name":	"approved",
				"type":	"bool"
			}
		],
		"name":	"setApprovalForAll",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256[]",
				"name":	"_tokenIds",
				"type":	"uint256[]"
			},
			{
				"internalType":	"uint8",
				"name":	"_class",
				"type":	"uint8"
			}
		],
		"name":	"setDNAForGenesisTokens",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
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
		"name":	"setPaymentToken",
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
			},
			{
				"internalType":	"string",
				"name":	"_tokenURI",
				"type":	"string"
			}
		],
		"name":	"setTokenURI",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes4",
				"name":	"interfaceId",
				"type":	"bytes4"
			}
		],
		"name":	"supportsInterface",
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
		"name":	"symbol",
		"outputs":	[
			{
				"internalType":	"string",
				"name":	"",
				"type":	"string"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"index",
				"type":	"uint256"
			}
		],
		"name":	"tokenByIndex",
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
				"name":	"owner",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"index",
				"type":	"uint256"
			}
		],
		"name":	"tokenOfOwnerByIndex",
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
		"name":	"tokenURI",
		"outputs":	[
			{
				"internalType":	"string",
				"name":	"",
				"type":	"string"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"totalSupply",
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
				"name":	"from",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"to",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"transferFrom",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_receiver",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"_amount",
				"type":	"uint256"
			}
		],
		"name":	"withdrawWeth",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	}
]
module.exports = ERC721ABI;