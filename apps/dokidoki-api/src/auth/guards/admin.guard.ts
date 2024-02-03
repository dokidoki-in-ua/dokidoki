import { ExecutionContext, Injectable } from '@nestjs/common';
import { LoggedInGuard } from './logged-in.guard';

@Injectable()
export class AdminGuard extends LoggedInGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return super.canActivate(context) && request.session.passport.user.isAdmin;
  }
}
