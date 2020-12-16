import * as moment from 'moment';
import { ArPoint } from './entities/arpoint.entity';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticationGuard } from './guards/authentication.guard';

@Controller('v1/arpoints')
@UseGuards(AuthenticationGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getUsers(@Param() params) {
    return this.appService.getPoint(params.id);
  }

  @Get()
  getUser() {
    return this.appService.getPoints();
  }

  @Post()
  create(@Body() point: ArPoint) {
    if (point.createdAt == null) {
      point.createdAt = new Date();
    }
    return this.appService.createPoint(point);
  }
}
