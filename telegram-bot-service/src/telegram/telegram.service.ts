import { Injectable, Logger } from '@nestjs/common';
import { I18nContext } from 'nestjs-i18n';
import { Context } from 'telegraf';

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);

  async startCommand(ctx: Context, i18n: I18nContext) {
    const reply = i18n.t('telegram.start');
    await ctx.reply(reply);
  }

  async helpCommand(ctx: Context, i18n: I18nContext) {
    const reply = i18n.t('telegram.help');
    await ctx.reply(reply);
  }

  async balanceCommand() {}

  async depositCommand() {}

  async withdrawCommand() {}

  // only for admin
  async lockBalanceCommand() {}

  // only for admin
  async unlockBalanceCommand() {}

  async createAuctionCommand() {}

  async bidCommand() {}

  async endAuctionCommand() {}
}
