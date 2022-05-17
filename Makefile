upgrade:
	yarn hardhat upgrade:Prediction --network bscTestnet --address 0x43624c41450D76A8711c257969a67Fa7E6EdB6EB
	yarn hardhat upgrade:Event --network bscTestnet --address 0xD51ED95e4f82bd4377B916b5D642f8F0e6B814DA
	yarn hardhat upgrade:MultipleChoices --network bscTestnet --address 0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e
	yarn hardhat upgrade:GroupPredict --network bscTestnet --address 0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208
	yarn hardhat upgrade:Handicap --network bscTestnet --address 0xd4cf937089DAc1FA149B8cc87Daa04fC920B0C90
verify:
	yarn hardhat verify:address

