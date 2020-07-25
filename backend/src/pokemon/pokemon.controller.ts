import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PokemonDto } from './interfaces/pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  @Get()
  getAllPokemon() {
    return 'we get all pokemon';
  }

  @Post()
  create(@Body() pokemonDto: PokemonDto) {
    return pokemonDto;
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `we get the pokemon with id ${id}`;
  }
}
