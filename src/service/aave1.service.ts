// import { ethers } from 'ethers';
// import { ReservesData, UserReserveData } from '@aave/contract-helpers';
// import { formatUserSummary } from '@aave/math-utils';
// import { request, gql } from 'graphql-request';
// import { NETWORKS } from '../network/networks'; // Файл с конфигурацией сетей
// // Функция для получения health factor
// async function getHealthFactor(userAddress: string, network: keyof typeof NETWORKS) {
//     const networkConfig = NETWORKS[network];

//     // Получение данных о пулах
//     const poolDataQuery = gql`
//     query GetPoolReserves {
//       reserves {
//         id
//         underlyingAsset
//         name
//         liquidityRate
//         totalATokenSupply
//         availableLiquidity
//         ...additionalFields
//       }
//     }
//   `;

//     // Получение данных о пользователе
//     const userDataQuery = gql`
//     query GetUserReserves($user: String!) {
//       userReserves(where: { user: $user }) {
//         reserve {
//           id
//         }
//         currentATokenBalance
//         currentVariableDebt
//         currentStableDebt
//       }
//     }
//   `;

//     try {
//         // Получение данных с GraphQL Aave субграфа
//         const poolReservesData = await request(networkConfig.subgraphUrl, poolDataQuery);
//         const rawUserReserves = await request(networkConfig.subgraphUrl, userDataQuery, {
//             user: userAddress.toLowerCase(),
//         });

//         // Текущий Unix timestamp
//         const currentTimestamp = Math.floor(Date.now() / 1000);

//         // Примерное значение usdPriceEth
//         const usdPriceEth = ethers.utils.parseUnits('0.0005', 18); // Текущая цена USD в ETH

//         // Форматирование данных и получение health factor
//         const userSummary = formatUserSummary(
//             poolReservesData.reserves as ReservesData[],
//             rawUserReserves.userReserves as UserReserveData[],
//             userAddress.toLowerCase(),
//             usdPriceEth,
//             currentTimestamp
//         );

//         console.log(`Health Factor для ${userAddress}: ${userSummary.healthFactor}`);
//         return userSummary.healthFactor;
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//         return null;
//     }
// }

// // Пример использования
// const userAddress = '0xYourWalletAddress';
// getHealthFactor(userAddress, 'ethereum');