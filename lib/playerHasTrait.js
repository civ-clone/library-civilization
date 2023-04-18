"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerHasTrait = exports.playerHasSomeTraits = exports.playerHasTraits = exports.playerTraitsOfType = exports.playerTraits = void 0;
const TraitRegistry_1 = require("@civ-clone/core-civilization/TraitRegistry");
const playerTraitCache = new Map();
const playerTraits = (player, traitRegistry = TraitRegistry_1.instance) => {
    if (!playerTraitCache.has(player)) {
        playerTraitCache.set(player, traitRegistry.getByLeader(player.civilization().leader().sourceClass()));
    }
    return playerTraitCache.get(player);
};
exports.playerTraits = playerTraits;
const playerTraitsOfType = (player, TraitType, traitRegistry = TraitRegistry_1.instance) => (0, exports.playerTraits)(player, traitRegistry).filter((trait) => trait instanceof TraitType);
exports.playerTraitsOfType = playerTraitsOfType;
const playerHasTraits = (player, ...args) => {
    const traits = [];
    let traitRegistry = TraitRegistry_1.instance;
    args.forEach((arg) => {
        if (arg instanceof TraitRegistry_1.TraitRegistry) {
            traitRegistry = arg;
            return;
        }
        traits.push(arg);
    });
    return traits.every((TraitType) => (0, exports.playerHasTrait)(player, TraitType, traitRegistry));
};
exports.playerHasTraits = playerHasTraits;
const playerHasSomeTraits = (player, ...args) => {
    const traits = [];
    let traitRegistry = TraitRegistry_1.instance;
    args.forEach((arg) => {
        if (arg instanceof TraitRegistry_1.TraitRegistry) {
            traitRegistry = arg;
            return;
        }
        traits.push(arg);
    });
    return traits.some((TraitType) => (0, exports.playerHasTrait)(player, TraitType, traitRegistry));
};
exports.playerHasSomeTraits = playerHasSomeTraits;
const playerHasTrait = (player, TraitType, traitRegistry = TraitRegistry_1.instance) => (0, exports.playerTraits)(player, traitRegistry).some((trait) => trait instanceof TraitType);
exports.playerHasTrait = playerHasTrait;
//# sourceMappingURL=playerHasTrait.js.map