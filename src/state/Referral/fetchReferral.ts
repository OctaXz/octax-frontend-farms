
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'

const fetchReferral = async (account) => {
    const [referralinfo] = await multicall(masterchefABI, [
        {
            address: getMasterChefAddress(),
            name: 'partnerInfo',
            params: [account],
        },
    ])
    return {
        partnerAddress: referralinfo.partnerAddress,
        isRegister: referralinfo.isRegister,
        totalChildPartner: referralinfo.totalChildPartner.toNumber(),
    }
}

export default fetchReferral
