import { ethers } from 'ethers';
import {
    UiPoolDataProvider,
    UiIncentiveDataProvider,
    ChainId,
} from '@aave/contract-helpers';
import * as markets from '@bgd-labs/aave-address-book';

const provider = new ethers.providers.JsonRpcProvider(
    'https://eth-mainnet.public.blastapi.io',
);

const currentAccount = '0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c';

const poolDataProviderContract = new UiPoolDataProvider({
    uiPoolDataProviderAddress: markets.AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
    provider,
    chainId: ChainId.mainnet,
});

const incentiveDataProviderContract = new UiIncentiveDataProvider({
    uiIncentiveDataProviderAddress:
        markets.AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
    provider,
    chainId: ChainId.mainnet,
});

export async function fetchContractData() {
    // Object containing array of pool reserves and market base currency data
    // { reservesArray, baseCurrencyData }
    const reserves = await poolDataProviderContract.getReservesHumanized({
        lendingPoolAddressProvider: markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
    });

    // Object containing array or users aave positions and active eMode category
    // { userReserves, userEmodeCategoryId }
    const userReserves = await poolDataProviderContract.getUserReservesHumanized({
        lendingPoolAddressProvider: markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
        user: currentAccount,
    });

    // Array of incentive tokens with price feed and emission APR
    const reserveIncentives =
        await incentiveDataProviderContract.getReservesIncentivesDataHumanized({
            lendingPoolAddressProvider:
                markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
        });

    // Dictionary of claimable user incentives
    const userIncentives =
        await incentiveDataProviderContract.getUserReservesIncentivesDataHumanized({
            lendingPoolAddressProvider:
                markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
            user: currentAccount,
        });

    console.log({ reserves, userReserves, reserveIncentives, userIncentives });
}

