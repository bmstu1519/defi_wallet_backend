import { ethers } from 'ethers';

// 1. Установите провайдера сети (замените на нужный RPC URL)
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.public.blastapi.io");

// 2. Задайте адрес контракта ProtocolDataProvider (для Aave v3 на Ethereum)
const protocolDataProviderAddress = "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d";
const protocolDataProviderABI = [
    "function getUserAccountData(address user) view returns (uint256 totalCollateralETH, uint256 totalDebtETH, uint256 availableBorrowsETH, uint256 currentLiquidationThreshold, uint256 ltv, uint256 healthFactor)"
];

// 3. Подключите контракт
const protocolDataProvider = new ethers.Contract(protocolDataProviderAddress, protocolDataProviderABI, provider);

// 4. Функция для получения данных пользователя
async function getUserData(userAddress) {
    try {
        const data = await protocolDataProvider.getUserAccountData(userAddress);
        const totalCollateralETH = ethers.utils.formatEther(data.totalCollateralETH);
        const totalDebtETH = ethers.utils.formatEther(data.totalDebtETH);
        const availableBorrowsETH = ethers.utils.formatEther(data.availableBorrowsETH);
        const healthFactor = ethers.utils.formatUnits(data.healthFactor, 18);

        console.log(`Залог (ETH): ${totalCollateralETH}`);
        console.log(`Долг (ETH): ${totalDebtETH}`);
        console.log(`Доступно для займа (ETH): ${availableBorrowsETH}`);
        console.log(`Health Factor: ${healthFactor}`);

        return {
            totalCollateralETH,
            totalDebtETH,
            availableBorrowsETH,
            healthFactor
        };
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}

// 5. Укажите адрес пользователя (замените на ваш адрес)
const userAddress = "0xYourWalletAddress";
getUserData(userAddress);
