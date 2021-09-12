import { AddTokenService } from './application/add_token.service';
import { APIToken } from './entities/token.entity';
import { ArPoint } from './entities/arpoint.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([ArPoint]),
    TypeOrmModule.forFeature([APIToken]),
  ],
  controllers: [AppController],
  providers: [AppService, AddTokenService],
})
export class AppModule {}
