upgrade:
	yarn hardhat upgrade:Prediction --network bscTestnet --address 0x522608829526221417EDC35194A9060De79428C4
	yarn hardhat upgrade:Event --network bscTestnet --address 0x9BBfAC96A5220a030fDDbD2702B8F5A225Dbe645
	yarn hardhat upgrade:MultipleChoices --network bscTestnet --address 0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e
	yarn hardhat upgrade:GroupPredict --network bscTestnet --address 0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208
	yarn hardhat upgrade:Handicap --network bscTestnet --address 0xd4cf937089DAc1FA149B8cc87Daa04fC920B0C90
	yarn hardhat upgrade:OverUnder --network bscTestnet --address 0x0CE4809548ADc080F203da3F4AF56fBAdDE8Ae00
verify:
	yarn hardhat verify:address --network bscTestnet

