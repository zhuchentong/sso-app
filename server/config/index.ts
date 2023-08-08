import { ConfigModule } from '@nestjs/config'
import { DatabaseConfig } from 'server/config/database.config'
import { AppConfig } from './app.config'

export function forConfigModule() {
  const environment = process.env.NODE_ENV || 'development'

  return ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [`.env.${environment}.local`, `.env.${environment}`],
    load: [
      AppConfig,
      DatabaseConfig,
    ],
  })
}