
          window.__NEXT_REGISTER_PAGE('/seedphrase/bitcoin.connector', function() {
            var comp = module.exports=webpackJsonp([53],{418:function(e,i,s){e.exports=s(419)},419:function(e,i,s){"use strict";function t(e){return function(i){var s=networks[e],t=s.feePerKb,a=i.toBuffer().length,r=t*Math.ceil(a/1e3);return void 0===s.dustSoftThreshold?r:(i.outs.forEach(function(e){e.value<s.dustSoftThreshold&&(r+=t)}),r)}}bitcoin.networks.shadow={magicPrefix:"ShadowCash Signed Message:\n",bip32:{public:4001376362,private:4001378792},pubKeyHash:63,scriptHash:125,wif:191,dustThreshold:0,feePerKb:1e3,estimateFee:function(){return"unused in this app"}},bitcoin.networks.shadowtn={magicPrefix:"ShadowCash Signed Message:\n",bip32:{public:1992359419,private:1992361850},pubKeyHash:127,scriptHash:196,wif:255,dustThreshold:0,feePerKb:1e3,estimateFee:function(){return"unused in this app"}},bitcoin.networks.clam={bip32:{public:2831314276,private:2831251494},pubKeyHash:137,wif:133},bitcoin.networks.bitcoin={magicPrefix:"Bitcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:0,scriptHash:5,wif:128,dustThreshold:546,feePerKb:1e4,estimateFee:t("bitcoin")},bitcoin.networks.testnet={magicPrefix:"Bitcoin Signed Message:\n",bip32:{public:70617039,private:70615956},pubKeyHash:111,scriptHash:196,wif:239,dustThreshold:546,feePerKb:1e4,estimateFee:t("testnet")},bitcoin.networks.litecoin={magicPrefix:"Litecoin Signed Message:\n",bip32:{public:27108450,private:27106558},pubKeyHash:48,scriptHash:5,wif:176,dustThreshold:0,dustSoftThreshold:1e5,feePerKb:1e5,estimateFee:t("litecoin")},bitcoin.networks.dogecoin={magicPrefix:"Dogecoin Signed Message:\n",bip32:{public:49990397,private:49988504},pubKeyHash:30,scriptHash:22,wif:158,dustThreshold:0,dustSoftThreshold:1e8,feePerKb:1e8,estimateFee:t("dogecoin")},bitcoin.networks.dash={magicPrefix:"DarkCoin Signed Message:\n",bip32:{public:50221816,private:50221772},pubKeyHash:76,scriptHash:16,wif:204,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("dash")},bitcoin.networks.viacoin={magicPrefix:"Viacoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:71,scriptHash:33,wif:199,dustThreshold:560,dustSoftThreshold:1e5,feePerKb:1e5,estimateFee:t("viacoin")},bitcoin.networks.viacointestnet={magicPrefix:"Viacoin Signed Message:\n",bip32:{public:70617039,private:70615956},pubKeyHash:127,scriptHash:196,wif:255,dustThreshold:560,dustSoftThreshold:1e5,feePerKb:1e5,estimateFee:t("viacointestnet")},bitcoin.networks.gemecredits={magicPrefix:"Gamecredits Signed Message:\n",bip32:{public:27108450,private:27106558},pubKeyHash:38,scriptHash:5,wif:166,dustThreshold:0,dustSoftThreshold:1e5,feePerKb:1e5,estimateFee:t("gamecredits")},bitcoin.networks.jumbucks={magicPrefix:"Jumbucks Signed Message:\n",bip32:{public:58353818,private:58352736},pubKeyHash:43,scriptHash:5,wif:171,dustThreshold:0,dustSoftThreshold:1e4,feePerKb:1e4,estimateFee:t("jumbucks")},bitcoin.networks.zetacoin={magicPrefix:"Zetacoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:80,scriptHash:9,wif:224,dustThreshold:546,feePerKb:1e4,estimateFee:t("zetacoin")},bitcoin.networks.nubits={magicPrefix:"Nu Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:25,scriptHash:26,wif:150,dustThreshold:100,feePerKb:100,estimateFee:t("nubits")},bitcoin.networks.nushares={magicPrefix:"Nu Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:63,scriptHash:64,wif:149,dustThreshold:1e4,feePerKb:1e4,estimateFee:t("nushares")},bitcoin.networks.blackcoin={magicPrefix:"BlackCoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:25,scriptHash:85,wif:153,dustThreshold:1,feePerKb:1e4,estimateFee:t("blackcoin")},bitcoin.networks.potcoin={magicPrefix:"PotCoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:55,scriptHash:5,wif:183,dustThreshold:1,feePerKb:1e5,estimateFee:t("potcoin")},bitcoin.networks.batacoin={magicPrefix:"Bata Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:25,scriptHash:5,wif:153,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("bata")},bitcoin.networks.feathercoin={magicPrefix:"Feathercoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:14,scriptHash:5,wif:142,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("feathercoin")},bitcoin.networks.gridcoin={magicPrefix:"Gridcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:62,scriptHash:85,wif:128,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("gridcoin")},bitcoin.networks.richcoin={magicPrefix:"Richcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:61,scriptHash:9,wif:128,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("richcoin")},bitcoin.networks.auroracoin={magicPrefix:"Auroracoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:23,scriptHash:5,wif:151,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("auroracoin")},bitcoin.networks.novacoin={magicPrefix:"Novacoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:8,scriptHash:28,wif:136,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("novacoin")},bitcoin.networks.cannacoin={magicPrefix:"Cannacoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:28,scriptHash:5,wif:189,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("cannacoin")},bitcoin.networks.clubcoin={magicPrefix:"Clubcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:28,scriptHash:85,wif:153,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("clubcoin")},bitcoin.networks.digibyte={magicPrefix:"Digibyte Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:30,scriptHash:5,wif:128,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("digitbyte")},bitcoin.networks.digitalcoin={magicPrefix:"Digitalcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:30,scriptHash:5,wif:158,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("digitalcoin")},bitcoin.networks.edrcoin={magicPrefix:"EDRcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:93,scriptHash:28,wif:221,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("edrcoin")},bitcoin.networks.egulden={magicPrefix:"e-Gulden Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:48,scriptHash:5,wif:176,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("egulden")},bitcoin.networks.gulden={magicPrefix:"Gulden Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:38,scriptHash:5,wif:166,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("gulden")},bitcoin.networks.gcrcoin={magicPrefix:"GCR Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:38,scriptHash:97,wif:154,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("gcr")},bitcoin.networks.monacoin={magicPrefix:"Monacoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:50,scriptHash:5,wif:178,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("monacoin")},bitcoin.networks.myriadcoin={magicPrefix:"Myriadcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:50,scriptHash:9,wif:178,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("myriadcoin")},bitcoin.networks.neoscoin={magicPrefix:"Neoscoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:53,scriptHash:5,wif:177,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("neoscoin")},bitcoin.networks.parkbyte={magicPrefix:"ParkByte Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:55,scriptHash:28,wif:183,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("parkbyte")},bitcoin.networks.peercoin={magicPrefix:"PPCoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:55,scriptHash:117,wif:183,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("peercoin")},bitcoin.networks.pesobit={magicPrefix:"Pesobit Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:55,scriptHash:85,wif:183,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("pesobit")},bitcoin.networks.reddcoin={magicPrefix:"Reddcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:61,scriptHash:5,wif:189,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("reddcoin")},bitcoin.networks.primecoin={magicPrefix:"Primecoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:23,scriptHash:83,wif:151,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("primecoin")},bitcoin.networks.rubycoin={magicPrefix:"Rubycoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:60,scriptHash:85,wif:188,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("rubycoin")},bitcoin.networks.rubycoin={magicPrefix:"Smileycoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:25,scriptHash:5,wif:176,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("smileycoin")},bitcoin.networks.solarcoin={magicPrefix:"SolarCoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:18,scriptHash:5,wif:146,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("solarcoin")},bitcoin.networks.syscoin={magicPrefix:"Syscoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:63,scriptHash:5,wif:191,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("syscoin")},bitcoin.networks.unobtanium={magicPrefix:"Unobtanium Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:130,scriptHash:30,wif:224,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("unobtanium")},bitcoin.networks.vergecoin={magicPrefix:"Vergecoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:30,scriptHash:33,wif:158,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("verge")},bitcoin.networks.vertcoin={magicPrefix:"Vertcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:71,scriptHash:5,wif:199,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("vertcoin")},bitcoin.networks.vpncoin={magicPrefix:"VpnCoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:71,scriptHash:5,wif:199,dustThreshold:0,dustSoftThreshold:0,feePerKb:0,estimateFee:t("vpncoin")},bitcoin.networks.pivx={magicPrefix:"PIVX Signed Message:\n",bip32:{public:36513075,private:35729707},pubKeyHash:30,scriptHash:13,wif:212},bitcoin.networks.eth={bip32:{public:4294967295,private:4294967295},pubKeyHash:255,wif:255,ethereum:!0},bitcoin.networks.etc={bip32:{public:4294967295,private:4294967295},pubKeyHash:255,wif:255,ethereum:!0},bitcoin.networks.abncoin={magicPrefix:"Abncoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:25,scriptHash:85,wif:153},bitcoin.networks.asiacoin={magicPrefix:"Asiacoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:23,scriptHash:8,wif:151},bitcoin.networks.bitcoinplus={magicPrefix:"Bitcoinplus Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:25,scriptHash:85,wif:153},bitcoin.networks.canadaecoin={magicPrefix:"Canada eCoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:28,scriptHash:5,wif:156},bitcoin.networks.einsteinium={magicPrefix:"Einsteinium Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:33,scriptHash:5,wif:161},bitcoin.networks.expanse={bip32:{public:4294967295,private:4294967295},pubKeyHash:255,wif:255,ethereum:!0},bitcoin.networks.iop={magicPrefix:"Internet of People Signed Message:\n",bip32:{public:662737247,private:2922649334},pubKeyHash:117,scriptHash:174,wif:49},bitcoin.networks.ixcoin={magicPrefix:"Ixcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:138,scriptHash:5,wif:128},bitcoin.networks.landcoin={magicPrefix:"Landcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:48,scriptHash:122,wif:176},bitcoin.networks.namecoin={magicPrefix:"Namecoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:52,scriptHash:13,wif:180},bitcoin.networks.navcoin={magicPrefix:"Navcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:53,scriptHash:85,wif:150},bitcoin.networks.okcash={magicPrefix:"Okcash Signed Message:\n",bip32:{public:63710167,private:63708275},pubKeyHash:55,scriptHash:28,wif:183},bitcoin.networks.posw={magicPrefix:"POSWcoin Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:55,scriptHash:85,wif:183},bitcoin.networks.stratis={magicPrefix:"Stratis Signed Message:\n",bip32:{public:76067358,private:76067549},pubKeyHash:63,scriptHash:125,wif:191},bitcoin.networks.zcash={magicPrefix:"Zcas hSigned Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:7352,scriptHash:7357,wif:128}}},[418]);
            return { page: comp.default }
          })
        