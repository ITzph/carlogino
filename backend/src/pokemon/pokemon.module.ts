import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { PokemonRepository } from './pokemon.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, PokemonRepository])],
  controllers: [PokemonController],
})
export class PokemonModule {}
