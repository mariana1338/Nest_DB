import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(Config:ConfigService)=>({
        type:'mysql',
        host: Config.get('DB_HOST'),
        port: Config.get('DB_PORT'),
        username: Config.get('DB_USER'),
        database: Config.get('DB_NAME'),
        entities:[__dirname + '/**/**/*.entity{.ts,.js']
      })
    }),
    TaskModule,
  ],
})
export class AppModule {}
