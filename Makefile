upgrade:
	yarn hardhat upgrade:Prediction --network bscTestnet --address 0x88160ce0d8C300286FC7BB724f820C176f4030ca
	yarn hardhat upgrade:Event --network bscTestnet --address 0xD023E170E5Be8fa0167cb6a2EAFb9B0365bAe398
	yarn hardhat upgrade:MultipleChoices --network bscTestnet --address 0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e
	yarn hardhat upgrade:GroupPredict --network bscTestnet --address 0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208
	yarn hardhat upgrade:HandicapGroupPredict --network bscTestnet --address 0xF212e709550EAcf106E7Ad8823eA65C154c86113
	yarn hardhat upgrade:Handicap --network bscTestnet --address 0xd4cf937089DAc1FA149B8cc87Daa04fC920B0C90
	yarn hardhat upgrade:OverUnder --network bscTestnet --address 0x0CE4809548ADc080F203da3F4AF56fBAdDE8Ae00
verify:
	yarn hardhat verify:address --network bscTestnet

