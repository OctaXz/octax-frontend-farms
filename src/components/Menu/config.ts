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
      {
        label: 'Exchange',
        href: 'https://exchange.octax.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x995A251C24B2a4280765E29a27052d31d355e744',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.octax.finance/#/pool',
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
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
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
        href: 'https://pancakeswap.info/token/0x995A251C24B2a4280765E29a27052d31d355e744',
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
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x995A251C24B2a4280765E29a27052d31d355e744',
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
      },
      {
        label: 'Docs',
        href: 'https://octax.gitbook.io/octax/',
      },
      {
        label: 'Blog',
        href: 'https://octax.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
