import BigNumber from 'bignumber.js'
import airdropABI from 'config/abi/airdrop.json'
import multicall from 'utils/multicall'
import { getAirdropAddress } from 'utils/addressHelpers'

const fetchAirdrop = async () => {
    const [totalPayOctaXAmount, totalPayOctaGAmount, userAirdropLength,octaXNextAirdropAmount,octaGNextAirdropAmount] = await multicall(airdropABI, [            
        {
            address: getAirdropAddress(),
            name: 'TotalPayOctaXAmount',
        },
        {
            address: getAirdropAddress(),
            name: 'TotalPayOctaGAmount',
        },
        {
            address: getAirdropAddress(),
            name: 'userAirdropLength',
        },
        {
            address: getAirdropAddress(),
            name: 'OctaXNextAirdropAmount',
        },
        {
            address: getAirdropAddress(),
            name: 'OctaGNextAirdropAmount',
        },
    ])      
    return {
        totalPayOctaXAmount: new BigNumber(totalPayOctaXAmount).div(new BigNumber(10).pow(18)).toNumber(),
        totalPayOctaGAmount: new BigNumber(totalPayOctaGAmount).div(new BigNumber(10).pow(18)).toNumber(),
        userAirdropLength: new BigNumber(userAirdropLength).toNumber(),
        octaXNextAirdropAmount: new BigNumber(octaXNextAirdropAmount).div(new BigNumber(10).pow(18)).toNumber(),
        octaGNextAirdropAmount: new BigNumber(octaGNextAirdropAmount).div(new BigNumber(10).pow(18)).toNumber(),        
    }
}

export default fetchAirdrop
