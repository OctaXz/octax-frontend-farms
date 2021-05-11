import BigNumber from 'bignumber.js'

import airdropABI from 'config/abi/airdrop.json'
import multicall from 'utils/multicall'
import { getAirdropAddress } from 'utils/addressHelpers'

const fetchAirdropUser = async (account) => {
    
    const [info,targetTime] = await multicall(airdropABI, [            
        {
            address: getAirdropAddress(),
            name: 'currentUserAirdropInfo',
            params: [account],
        },
        {
            address: getAirdropAddress(),
            name: 'AirdropTargetTime',
            params: [account],
        },
    ])   
    
    return {        
        userInfo: {            
            userAddress: info.userAddress,
            totalAirdrop: new BigNumber(info.totalAirdrop._hex).toNumber(),
            totalOctaXAmount: new BigNumber(info.totalOctaXAmount._hex).div(new BigNumber(10).pow(18)).toNumber(),
            totalOctaGAmount: new BigNumber(info.totalOctaGAmount._hex).div(new BigNumber(10).pow(18)).toNumber(),
            lastTimestamp: new BigNumber(info.lastTimestamp._hex).toNumber(),
            targetTime: new BigNumber(targetTime).toNumber(),
        },
    }
}

export default fetchAirdropUser
