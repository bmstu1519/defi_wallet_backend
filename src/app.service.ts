import { Injectable } from "@nestjs/common";
import { getUserAaveInfo } from "./service/aaveDocsRead.service";

@Injectable()
export class AppService {
  constructor() {
    this.initialize();
  }

  async initialize() {
    const USER_ADRESS = "";
    try {
      const result = await getUserAaveInfo(USER_ADRESS);

      console.log("результат:", result)
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
  }
}

