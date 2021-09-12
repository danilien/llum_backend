import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { ArPoint } from './entities/arpoint.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ArPoint) private pointsRepository: Repository<ArPoint>,
  ) {}

  async getPoints(): Promise<ArPoint[]> {
    return await this.pointsRepository.find();
  }

  async getPoint(id: number): Promise<ArPoint> {
    return await this.pointsRepository.findOne({
      where: [{ id }],
    });
  }

  async createPoint(point: ArPoint) {
    return this.pointsRepository.save(point);
  }
}
