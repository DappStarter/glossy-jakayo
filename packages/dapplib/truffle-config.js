require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name release mad history just kangaroo army gaze'; 
let testAccounts = [
"0x2963ba853e96e9ee3c47e94894f99398491d907ede87f7e1f47cbf1305ad2240",
"0x785f753b5aafd742b4509a0e461d515b28c662daa0046358f1f134170881f301",
"0xa90ee8068b1333b17fbf4b356a0d6d9bda2c43f4a5e4e295374c47402080e6c7",
"0x854cadb99e7b31ce19e20f788a79176374861b2f5ec3bf497cc602b7dd6b7ff3",
"0x2171bc42f260d389fd748078a4c888ed5dc15d2a871fe659948624d38780257d",
"0x4d9aa85893ef9671a09c66cffa6ff5269781bed47167c9f90fdda6aedd2f4dda",
"0x652943836dd69268bf9d7359de992f130941faf1e4bc893d670e5a0cd2929907",
"0xa62ea021879f66d3c2d2094a93ff06037fb54c1007d1114db2a8dac37000af85",
"0xa332841129dc2333e5fa7a199297e511e43e30be2446f8ecf5bd2a2b2731fb85",
"0xc8fea9daf7ef3f69ba9a7ecf0dc83ecdc88e2d9cf2d03d993b747e3611b65cb7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
