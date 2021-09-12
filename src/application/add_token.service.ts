import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { APIToken } from 'src/entities/token.entity';
import { Repository } from 'typeorm/repository/Repository';

/**
 * This service will only execute on application start.
 */
@Injectable()
export class AddTokenService implements OnApplicationBootstrap {
  private readonly logger = new Logger(this.onApplicationBootstrap.name);

  constructor(
    @InjectRepository(APIToken) private tokenRepository: Repository<APIToken>,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    try {
      const token = new APIToken();
      token.id = 1;
      token.createdAt = new Date(Date.now());
      token.isValid = true;
      token.value = 'jcK9HRDKwd*_AfHBn*nZDXNYLxcPLp6e8Du8DBy123';
      await this.tokenRepository
        .createQueryBuilder()
        .insert()
        .into(APIToken)
        .values(token)
        .onConflict(`("id") DO NOTHING`)
        .execute();
    } catch (error) {
      this.logger.error(
        `There is an error adding the default valid token ${error}`,
      );
    }
  }
}
