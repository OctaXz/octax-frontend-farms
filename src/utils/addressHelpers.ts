import addresses from 'config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getCakeAddress = () => {
  return addresses.cake[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}
export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}

export const getAirdropAddress = () => {
  return addresses.airdrop[chainId]
}

export const getOctagAddress = () => {
  return addresses.octag[chainId]
}
export const getBusdAddress = () => {
  return addresses.busd[chainId]
}