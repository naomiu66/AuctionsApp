import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUpdate } from './telegram.update';

@Module({
  imports: [
    ConfigModule,
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const token = configService.get<string>('BOT_TOKEN');
        if (!token) throw new Error('BOT_TOKEN is not defined in .env');
        return {
          token,
          //       launchOptions: {
          // webhook: {
          //   domain,
          //   hookPath: `/bot${token}`,
        };
      },
    }),
  ],
  providers: [TelegramService, TelegramUpdate],
})
export class TelegramModule {}
