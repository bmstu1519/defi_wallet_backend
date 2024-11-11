import { Injectable } from '@nestjs/common';
import { fetchContractData } from './service/aave2.service';

@Injectable()
export class AppService {
  constructor() {
    // Вызываем fetchContractData при инициализации сервиса
    this.initialize();
  }
  getHello(): string {
    return 'Hello World!';
  }
  async initialize() {
    try {
      await fetchContractData();
    } catch (error) {
      console.error('Error fetching contract data:', error);
    }
  }
}
