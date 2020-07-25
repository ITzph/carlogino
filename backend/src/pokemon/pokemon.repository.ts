import { Pokemon } from './pokemon.entity';
import { EntityRepository, Repository } from 'typeorm';
import { PokemonDto } from './interfaces/pokemon.dto';

@EntityRepository(Pokemon)
export class PokemonRepository extends Repository<Pokemon> {
  createPokemon = async (pokemonDto: PokemonDto) => {
    return await this.save(pokemonDto);
  };
}
