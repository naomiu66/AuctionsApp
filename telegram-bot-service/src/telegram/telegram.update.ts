import { Injectable } from "@nestjs/common";
import { Command, Start, Update } from "nestjs-telegraf";
import { Context } from "telegraf";

@Update()
@Injectable()
export class TelegramUpdate {
    @Start()
    async onStart(ctx: Context) {
        await ctx.reply('Hello world!');
    }

    @Command('help')
    async onHelp(ctx: Context) {
        await ctx.reply('Help message yo');
    }
}