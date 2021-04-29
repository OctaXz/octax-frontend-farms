import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    version : 2 ,
    lpSymbol: 'OCTAX',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xfcb2a35134e3f0a204f7e94c6d748c90905e696d', // OCTAX-BUSD
    },
    tokenSymbol: 'OCTAX',
    tokenAddresses: {
      97: '',
      56: '0x39cab1DdaFDa34B9202F5a41f71B15d2F3EbA2aC',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd

  },
  {
    pid: 1,
    risk: 5,
    version : 2 ,
    lpSymbol: 'OCTAG',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x14bdb4969a23604ae1817d4f9ff6a86103ac5649', // OCTAG-BUSD
    },
    tokenSymbol: 'OCTAG',
    tokenAddresses: {
      97: '',
      56: '0x4F1498da0f50F94e97F900b7e6E13d8e5220aBE9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 2,
    risk: 5,
    version : 2 ,
    lpSymbol: 'OCTAX-BUSD LP',    
    lpAddresses: {
      97: '',
      56: '0xfcb2a35134e3f0a204f7e94c6d748c90905e696d',
    },
    tokenSymbol: 'OCTAX',
    tokenAddresses: {
      97: '',
      56: '0x39cab1DdaFDa34B9202F5a41f71B15d2F3EbA2aC',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    version : 2 ,
    lpSymbol: 'OCTAX-BNB LP',    
    lpAddresses: {
      97: '',
      56: '0x4b3bc15d21efd300d52ad3c606af97ea0fede717',
    },
    tokenSymbol: 'OCTAX',
    tokenAddresses: {
      97: '',
      56: '0x39cab1DdaFDa34B9202F5a41f71B15d2F3EbA2aC',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 
  {
    pid: 4,
    risk: 5,
    version : 2 ,
    lpSymbol: 'OCTAG-BUSD LP',    
    lpAddresses: {
      97: '',
      56: '0x14bdb4969a23604ae1817d4f9ff6a86103ac5649',
    },
    tokenSymbol: 'OCTAG',
    tokenAddresses: {
      97: '',
      56: '0x4F1498da0f50F94e97F900b7e6E13d8e5220aBE9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 5,
    risk: 5,
    version : 2 ,
    lpSymbol: 'OCTAX-OCTAG LP',    
    lpAddresses: {
      97: '',
      56: '0x4fbeacfa204c19ae44676791a6f2049c876b64b9',
    },
    tokenSymbol: 'OCTAG',
    tokenAddresses: {
      97: '',
      56: '0x4F1498da0f50F94e97F900b7e6E13d8e5220aBE9',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  }, 
  {
    pid: 6,
    risk: 5,
    version : 2 ,
    lpSymbol: 'OCTAX-ADA LP',    
    lpAddresses: {
      97: '',
      56: '0xbf8E7d69cDAF7340ee91F9D48B2eE9b1770fbA71',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },   
  {
    pid: 7,
    risk: 5,
    version : 2 ,
    lpSymbol: 'OCTAX-CAKE LP',    
    lpAddresses: {
      97: '',
      56: '0xf169b360377ACD302C1767759Fee570A882C8871',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 12,
    risk: 5,
    version : 1,
    lpSymbol: 'BNB-BUSD LP',    
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

    {
    pid: 13,
    risk: 5,
      version : 2 ,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    version : 2 ,
    lpSymbol: 'USDT-BUSD LP',    
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 10,
    risk: 5,
    version : 2 ,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x05faf555522Fa3F93959F86B41A3808666093210',
    },
    tokenSymbol: 'UST',
    tokenAddresses: {
      97: '',
      56: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 11,
    risk: 5,
    version : 2 ,
    lpSymbol: 'USDC-BUSD LP',    
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },                          
]

export default farms
