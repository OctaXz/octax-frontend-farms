import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Airdrop',
    icon: 'AirdropIcon',
    href: '/airdrop',
  }
  ,{
    label: 'Referral',
    icon: 'ReferralIcon',
    href: '/referral',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      //   {
      //   label: 'Exchange',
      //   href: 'https://exchange.octax.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x39cab1DdaFDa34B9202F5a41f71B15d2F3EbA2aC',
      // },
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x39cab1DdaFDa34B9202F5a41f71B15d2F3EbA2aC',
        target : "_blank",
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
        target : "_blank",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
   {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x39cab1DdaFDa34B9202F5a41f71B15d2F3EbA2aC',
        target : "_blank",
      },
      // {
      //   label: 'Token',
      //   href: 'https://www.coingecko.com/en/coins/octax-finance',
      // },
      // {
      //   label: 'Contracts',
      //   href: 'https://coinmarketcap.com/currencies/octax-finance/',
      // },
      {
        label: 'Transparency',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x39cab1DdaFDa34B9202F5a41f71B15d2F3EbA2aC',
        target : "_blank",
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/octaxz/',
        target : "_blank",
      },
      {
        label: 'Docs',
        href: 'https://octax.gitbook.io/octax/',
        target : "_blank",
      },
      {
        label: 'Blog',
        href: 'https://octax.medium.com/',
        target : "_blank",
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  {
    label: 'Audit by TechRate',
    icon: 'AuditIcon',
    href: 'https://octax.gitbook.io/octax/octax-vault/audit',
    target : "_blank",
  },
  {
    label: 'CertiK(In Progress)',
    icon: 'AuditIcon',
     href: 'https://octax.gitbook.io/octax/octax-vault/audit',
    target : "_blank",
  },
]

export default config
