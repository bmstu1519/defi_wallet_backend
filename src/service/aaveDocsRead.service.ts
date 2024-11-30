import { UiPoolDataProvider } from "@aave/contract-helpers";

import { ethers } from "ethers";

export async function getUserAaveInfo(userAddress: string)  {

  const BNB_POOL_ADDRESS = "0x6807dc923806fE8Fd134338EABCA509979a7e0cB";
  const BNB_CHAIN_ID: number = 56 //56(0x38)

  const provider = new ethers.providers.JsonRpcProvider("https://bsc-rpc.publicnode.com");

  const poolDataProvider = new UiPoolDataProvider({
    chainId: BNB_CHAIN_ID, provider: provider, uiPoolDataProviderAddress: BNB_POOL_ADDRESS,
  });

  const result = await poolDataProvider.getUserReservesData({
    lendingPoolAddressProvider: BNB_POOL_ADDRESS, user: userAddress,
  })
  return {
    result
  }
}

// // Пример использования
// async function main() {
//   const userAddress = "0xYourUserAddress";
//   try {
//     const userInfo = await getUserAaveInfo(userAddress);
//     console.log("User Aave Information:");
//     console.log("Collateral:", userInfo.collateral, "ETH");
//     console.log("Debt:", userInfo.debt, "ETH");
//     console.log("Health Factor:", userInfo.healthFactor);
//   } catch (error) {
//     console.error("Main error:", error);
//   }
// }

// main();