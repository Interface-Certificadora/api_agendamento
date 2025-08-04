import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { Agendamento } from './agendamentos/entities/agendamento.model';
import { Agente } from './agentes/entities/agente.model';
import { FcWeb } from './fcweb/fcweb.model';
import { AgentesModule } from './agentes/agentes.module';
import { AgenteDisponibilidade } from './agentes/entities/agente-disponibilidade.model';
import { AgenteModalidade } from './agentes/entities/agente-modalidade.model';
import { DisponibilidadeModule } from './disponibilidade/disponibilidade.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        models: [Agendamento, Agente, FcWeb, AgenteDisponibilidade, AgenteModalidade],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),

    AgendamentosModule,

    AgentesModule,

    DisponibilidadeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
