import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceService } from './service/service/service.service';
import { ResolverResolver } from './resolver/resolver/resolver.resolver';
import { Provider } from './provider/provider';
import { ModuleModule } from './module/module/module.module';
import { GatewayGateway } from './gateway/gateway.gateway';
import { ControllerController } from './controller/controller/controller.controller';

@Module({
  imports: [ModuleModule],
  controllers: [AppController, ControllerController],
  providers: [AppService, ServiceService, ResolverResolver, Provider, GatewayGateway],
})
export class AppModule {}
