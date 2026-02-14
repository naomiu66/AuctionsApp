import { Injectable, Logger } from '@nestjs/common';
import { Command, Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { TelegramService } from './telegram.service';
import { I18n, I18nContext } from 'nestjs-i18n';

@Update()
@Injectable()
export class TelegramUpdate {
  private readonly logger = new Logger(TelegramUpdate.name);

  constructor(private telegramService: TelegramService) {}
  @Start()
  async onStart(@Ctx() ctx: Context, @I18n() i18n: I18nContext) {
    await this.telegramService.startCommand(ctx, i18n);
  }

  @Command('help')
  async onHelp(@Ctx() ctx: Context, @I18n() i18n: I18nContext) {
    await this.telegramService.helpCommand(ctx, i18n);
  }
}
