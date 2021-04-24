import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DRGM',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x58e37Eea48Ff89e0Ae6F6bc026e7987DD9b89971',
    },
    tokenSymbol: 'DRGM',
    tokenAddresses: {
      97: '',
      56: '0x995A251C24B2a4280765E29a27052d31d355e744',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
   
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BUSD-DRGM LP',
    lpAddresses: {
      97: '',
      56: '0x58e37Eea48Ff89e0Ae6F6bc026e7987DD9b89971',
    },
    tokenSymbol: 'DRGM',
    tokenAddresses: {
      97: '',
      56: '0x995A251C24B2a4280765E29a27052d31d355e744',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
