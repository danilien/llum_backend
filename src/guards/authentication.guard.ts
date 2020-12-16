import { APIToken } from './../entities/token.entity';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';

export interface ITokenUser {
  userId: string;
}

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    @InjectRepository(APIToken) private tokenRepository: Repository<APIToken>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    let authorizationString = '';
    if (Array.isArray(authorization)) {
      authorizationString = authorization[0];
    } else {
      authorizationString = authorization;
    }
    const validTokens = await this.tokenRepository.find({
      where: [{ isValid: true }],
    });
    let isValid = false;
    validTokens.forEach(token => {
      isValid = isValid || authorizationString === token.value;
    });
    return isValid;
  }
}
