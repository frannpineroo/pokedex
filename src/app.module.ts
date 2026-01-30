import { join } from 'path'; // Paquete de Node.js para manejar rutas de archivos
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    PokemonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
