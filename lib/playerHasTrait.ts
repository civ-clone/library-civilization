import {
  TraitRegistry,
  instance as traitRegistryInstance,
} from '@civ-clone/core-civilization/TraitRegistry';
import Player from '@civ-clone/core-player/Player';
import Trait from '@civ-clone/core-civilization/Trait';

const playerTraitCache = new Map<Player, Trait[]>();

export const playerTraits = (
  player: Player,
  traitRegistry: TraitRegistry = traitRegistryInstance
): Trait[] => {
  if (!playerTraitCache.has(player)) {
    playerTraitCache.set(
      player,
      traitRegistry.getByLeader(player.civilization().leader()!.sourceClass())
    );
  }

  return playerTraitCache.get(player)!;
};

export const playerTraitsOfType = (
  player: Player,
  TraitType: typeof Trait,
  traitRegistry: TraitRegistry = traitRegistryInstance
) =>
  playerTraits(player, traitRegistry).filter(
    (trait) => trait instanceof TraitType
  );

export const playerHasTraits = (
  player: Player,
  ...args: (typeof Trait | TraitRegistry)[]
) => {
  const traits: (typeof Trait)[] = [];

  let traitRegistry = traitRegistryInstance;

  args.forEach((arg) => {
    if (arg instanceof TraitRegistry) {
      traitRegistry = arg;

      return;
    }

    traits.push(arg);
  });

  return traits.every((TraitType) =>
    playerHasTrait(player, TraitType, traitRegistry)
  );
};

export const playerHasSomeTraits = (
  player: Player,
  ...args: (typeof Trait | TraitRegistry)[]
) => {
  const traits: (typeof Trait)[] = [];

  let traitRegistry = traitRegistryInstance;

  args.forEach((arg) => {
    if (arg instanceof TraitRegistry) {
      traitRegistry = arg;

      return;
    }

    traits.push(arg);
  });

  return traits.some((TraitType) =>
    playerHasTrait(player, TraitType, traitRegistry)
  );
};

export const playerHasTrait = (
  player: Player,
  TraitType: typeof Trait,
  traitRegistry: TraitRegistry = traitRegistryInstance
) =>
  playerTraits(player, traitRegistry).some(
    (trait) => trait instanceof TraitType
  );
