import { AaveProtocolDataProvider, Pool } from '@aave/contract-helpers';
import { formatUnits } from 'ethers/lib/utils';

async function getUserAaveInfo(userAddress: string) {
    // Инициализация провайдера
    const provider = new ethers.providers.JsonRpcProvider('YOUR_RPC_URL');

    // Адреса контрактов Aave v3 для Ethereum mainnet
    const POOL_ADDRESS = '0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2';
    const POOL_DATA_PROVIDER = '0x7B4EB56E7CD4b454BA8ff71E4518426369a138a3';

    // Инициализация контрактов
    const poolDataProvider = new AaveProtocolDataProvider({
        provider,
        poolAddress: POOL_ADDRESS
    });

    const pool = new Pool(provider, {
        POOL: POOL_ADDRESS
    });

    try {
        // Получение данных пользователя
        const userAccountData = await pool.getUserAccountData(userAddress);

        // Форматирование данных
        const totalCollateralBase = formatUnits(userAccountData.totalCollateralBase, 18);
        const totalDebtBase = formatUnits(userAccountData.totalDebtBase, 18);
        const healthFactor = formatUnits(userAccountData.healthFactor, 18);

        return {
            collateral: totalCollateralBase,
            debt: totalDebtBase,
            healthFactor: healthFactor
        };
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

// Пример использования
async function main() {
    const userAddress = '0xYourUserAddress';
    try {
        const userInfo = await getUserAaveInfo(userAddress);
        console.log('User Aave Information:');
        console.log('Collateral:', userInfo.collateral, 'ETH');
        console.log('Debt:', userInfo.debt, 'ETH');
        console.log('Health Factor:', userInfo.healthFactor);
    } catch (error) {
        console.error('Main error:', error);
    }
}

// main();