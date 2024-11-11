// import { ethers } from 'ethers';
// import { UiPoolDataProvider, formatUserSummaryData } from '@aave/contract-helpers';
// import { ChainId } from '@aave/contract-helpers';
// import { UiIncentiveDataProvider } from '@aave/contract-helpers';
// import { NETWORKS } from '../network/networks'; // Файл с конфигурацией сетей

// async function getHealthFactor(walletAddress: string, network: string) {
//     // Получаем конфигурацию для указанной сети
//     const networkConfig = NETWORKS[network];
//     if (!networkConfig) {
//         throw new Error('Unsupported network');
//     }

//     const provider = new ethers.providers.JsonRpcProvider(networkConfig.rpcUrl);

//     const uiPoolDataProvider = new UiPoolDataProvider({
//         uiPoolDataProviderAddress: networkConfig.uiPoolDataProviderAddress,
//         provider,
//         chainId: ChainId.mainnet, // Укажи нужную сеть
//     });

//     const userReserves = await uiPoolDataProvider.getUserReservesHumanized({
//         user: walletAddress,
//     });

//     // Форматируем данные пользователя
//     const userData = formatUserSummaryData({
//         currentTimestamp: Math.floor(Date.now() / 1000),
//         userReserves: userReserves.userReserves,
//         marketReferenceCurrencyPriceInUsd: '1', // Можно оставить '1' для простоты
//         userEmodeCategoryId: 0,
//     });

//     const healthFactor = userData.healthFactor;
//     console.log(`Health Factor: ${healthFactor}`);
//     return healthFactor;
// }

// // // Пример использования
// // (async () => {
// //     const healthFactor = await getHealthFactor('0xYourWalletAddress', 'ethereum');
// //     console.log('Health Factor:', healthFactor);
// // })();
