create-base:
	yarn hardhat deploy:Prediction --network bscTestnet
	yarn hardhat deploy:Event --network bscTestnet
create-games:
	yarn hardhat deploy:MultipleChoices --network bscTestnet
	yarn hardhat deploy:GroupPredict --network bscTestnet
	yarn hardhat deploy:HandicapGroupPredict --network bscTestnet
	yarn hardhat deploy:Handicap --network bscTestnet
	yarn hardhat deploy:OverUnder --network bscTestnet
upgrade:
	yarn hardhat upgrade:Prediction --network bscTestnet --address 0x737Df0F21b8C98E1F2CB2D652428f337191Bd929
	yarn hardhat upgrade:Event --network bscTestnet --address 0x54d760D06e229a3100a915514CB93216B0444799
	yarn hardhat upgrade:MultipleChoices --network bscTestnet --address 0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e
	yarn hardhat upgrade:GroupPredict --network bscTestnet --address 0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208
	yarn hardhat upgrade:HandicapGroupPredict --network bscTestnet --address 0xF212e709550EAcf106E7Ad8823eA65C154c86113
	yarn hardhat upgrade:Handicap --network bscTestnet --address 0xd4cf937089DAc1FA149B8cc87Daa04fC920B0C90
	yarn hardhat upgrade:OverUnder --network bscTestnet --address 0x0CE4809548ADc080F203da3F4AF56fBAdDE8Ae00
	yarn hardhat upgrade:ComPool --network bscTestnet --address 0x59f06e624473284fA92F631aA3c097eE5025f8A8
	yarn hardhat upgrade:ELPToken --network bscTestnet --address 0xCdD7A96Ef0A5F5b66C2501e01bee742915AD27A3
	yarn hardhat upgrade:ERC721Token --network bscTestnet --address 0x1C566aa7Aa21395975e990E119c4a0cD9819DaCA
verify:
	yarn hardhat verify:address --network bscTestnet
upgrade-mainnet:
	yarn hardhat upgrade:Prediction --network bsc --address 0x6F351e74dC41a3FbfdF11424894a29c7686004de
	yarn hardhat upgrade:Event --network bsc --address 0xdb48A5e4b09B5241e812c26763E94C1780B04635
	yarn hardhat upgrade:MultipleChoices --network bsc --address 0xCe496fFa56849EDdfB70e12f008d2127631966c6  
	yarn hardhat upgrade:GroupPredict --network bsc --address 0x32F8cB58D9CE271C6De8429d6fB6D074E667664D  
	yarn hardhat upgrade:HandicapGroupPredict --network bsc --address 0xe34F7787CbD75f8c3248e30516AaFc48a1668f82
	yarn hardhat upgrade:Handicap --network bsc --address 0xc835c891e71d5c648e88B5ca57C33362b1c29682
	yarn hardhat upgrade:OverUnder --network bsc --address 0xCEB7c00383B39135D61cF240f0cc6093290F21ED
	yarn hardhat upgrade:ComPool --network bsc --address 0x0286A2bf971c9B200dFf86fEEe911f60F3fB2dA1
	yarn hardhat upgrade:ELPToken --network bsc --address 0x9D6CBBBD7eAd35eeA912332402E1bbbC99aED135
	yarn hardhat upgrade:ERC721Token --network bsc --address 0x349851fF5dfca5e3A4c98F5573716923283D3362

