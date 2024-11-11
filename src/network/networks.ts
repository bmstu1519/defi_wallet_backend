export const NETWORKS = {
  ethereum: {
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
    uiPoolDataProviderAddress: '0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2',
    // uiPoolDataProviderAddress: '0xF025D36b7Fe69da7A4530F7c9AE5A57A7FfBA83c', // Aave V3
  },
  polygon: {
    // rpcUrl: 'https://polygon-rpc.com/',
    rpcUrl: 'https://polygon.llamarpc.com',
    uiPoolDataProviderAddress: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    // uiPoolDataProviderAddress: '0x529FE94B8DeDD5b4D7e7E5C30F90F4Ee08b56bcC', // Aave V3 Polygon
  },
  bnb: {
    // https://bsc-rpc.publicnode.com
    rpcUrl: 'https://binance.llamarpc.com',
    uiPoolDataProviderAddress: '0x6807dc923806fE8Fd134338EABCA509979a7e0cB',
  },
  arbitrum: {
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    uiPoolDataProviderAddress: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    // uiPoolDataProviderAddress: '0x76b8a7c7e8B9Bc13A9cD3FdF33b5ff4aFd6f9DfC', // Aave V3 Arbitrum
  },
};
