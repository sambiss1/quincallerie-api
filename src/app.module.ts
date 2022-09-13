import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { MaterielModule } from './materiel/materiel.module';
import { CategorieModule } from './categorie/categorie.module';
import * as dotenv from 'dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity.{ts,js}'],

      synchronize: true,
    }),
    ClientModule,
    MaterielModule,
    CategorieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
