import { TraitRegistry } from '@civ-clone/core-civilization/TraitRegistry';
import Player from '@civ-clone/core-player/Player';
import Trait from '@civ-clone/core-civilization/Trait';
export declare const playerTraits: (
  player: Player,
  traitRegistry?: TraitRegistry
) => Trait[];
export declare const playerTraitsOfType: (
  player: Player,
  TraitType: typeof Trait,
  traitRegistry?: TraitRegistry
) => Trait[];
export declare const playerHasTraits: (
  player: Player,
  ...args: (typeof Trait | TraitRegistry)[]
) => boolean;
export declare const playerHasSomeTraits: (
  player: Player,
  ...args: (typeof Trait | TraitRegistry)[]
) => boolean;
export declare const playerHasTrait: (
  player: Player,
  TraitType: typeof Trait,
  traitRegistry?: TraitRegistry
) => boolean;
