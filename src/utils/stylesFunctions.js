import {
  stylesGrass,
  stylesFire,
  stylesPoison,
  stylesFlying,
  stylesWater,
  stylesBug,
  stylesNormal,
  stylesEletric,
  stylesGround,
  stylesFairy,
  stylesFighting,
  stylesGhost,
  stylesPsychic,
  stylesRock,
  stylesDark,
  stylesDragon,
  stylesIce,
  stylesSteel
} from "../styles";

export const dynamicBackground = (types) => {
  if (types[0].type.name === "grass") {
    return stylesGrass.backgroundGrass
  };

  if (types[0].type.name === "fire") {
    return stylesFire.backgroundFire
  };

  if (types[0].type.name === "water") {
    return stylesWater.backgroundWater
  };

  if (types[0].type.name === "bug") {
    return stylesBug.backgroundBug
  };

  if (types[0].type.name === "flying") {
    return stylesFlying.backgroundFlying
  };

  if (types[0].type.name === "normal") {
    return stylesNormal.backgroundNormal
  };

  if (types[0].type.name === "poison") {
    return stylesPoison.backgroundPoison
  };

  if (types[0].type.name === "electric") {
    return stylesEletric.backgroundEletric
  };

  if (types[0].type.name === "ground") {
    return stylesGround.backgroundGround
  };

  if (types[0].type.name === "fairy") {
    return stylesFairy.backgroundFairy
  };

  if (types[0].type.name === "rock") {
    return stylesRock.backgroundRock
  };

  if (types[0].type.name === "psychic") {
    return stylesPsychic.backgroundPsychic
  };

  if (types[0].type.name === "fighting") {
    return stylesFighting.backgroundFighting
  };

  if (types[0].type.name === "ghost") {
    return stylesGhost.backgroundGhost
  };
  
  if (types[0].type.name === "dark") {
    return stylesDark.backgroundDark
  };

  if (types[0].type.name === "dragon") {
    return stylesDragon.backgroundDragon
  };

  if (types[0].type.name === "ice") {
    return stylesIce.backgroundIce
  };

  if (types[0].type.name === "steel") {
    return stylesSteel.backgroundSteel
  };
};

export const dynamicBackgroundVector = (types) => {
  if (types[0].type.name === "grass") {
    return stylesGrass.grassVector
  };

  if (types[0].type.name === "fire") {
    return stylesFire.fireVector
  };

  if (types[0].type.name === "water") {
    return stylesWater.waterVector
  };

  if (types[0].type.name === "bug") {
    return stylesBug.bugVector
  };

  if (types[0].type.name === "flying") {
    return stylesFlying.flyingVector
  };

  if (types[0].type.name === "normal") {
    return stylesNormal.normalVector
  };

  if (types[0].type.name === "poison") {
    return stylesPoison.poisonVector
  };

  if (types[0].type.name === "electric") {
    return stylesEletric.eletricVector
  };

  if (types[0].type.name === "ground") {
    return stylesGround.groundVector
  };

  if (types[0].type.name === "fairy") {
    return stylesFairy.fairyVector
  };

  if (types[0].type.name === "rock") {
    return stylesRock.rockVector
  };

  if (types[0].type.name === "psychic") {
    return stylesPsychic.psychicVector
  };

  if (types[0].type.name === "fighting") {
    return stylesFighting.fightingVector
  };

  if (types[0].type.name === "ghost") {
    return stylesGhost.ghostVector
  };

  if (types[0].type.name === "dark") {
    return stylesDark.darkVector
  };

  if (types[0].type.name === "dragon") {
    return stylesDragon.dragonVector
  };

  if (types[0].type.name === "ice") {
    return stylesIce.iceVector
  };

  if (types[0].type.name === "steel") {
    return stylesSteel.steelVector
  };
}

export const dynamicBackgroundOpacity = (types) => {
  if (types[0].type.name === "grass") {
    return stylesGrass.backgroundGrassOpacity
  };

  if (types[0].type.name === "fire") {
    return stylesFire.backgroundFireOpacity
  };

  if (types[0].type.name === "water") {
    return stylesWater.backgroundWaterOpacity
  }

  if (types[0].type.name === "bug") {
    return stylesBug.backgroundBugOpacity
  };

  if (types[0].type.name === "normal") {
    return stylesNormal.backgroundNormalOpacity
  };

  if (types[0].type.name === "flying") {
    return stylesFlying.backgroundFlyingOpacity
  };

  if (types[0].type.name === "poison") {
    return stylesPoison.backgroundPoisonOpacity
  };

  if (types[0].type.name === "electric") {
    return stylesEletric.backgroundEletricOpacity
  };

  if (types[0].type.name === "ground") {
    return stylesGround.backgroundGroundOpacity
  };

  if (types[0].type.name === "fairy") {
    return stylesFairy.backgroundFairyOpacity
  };

  if (types[0].type.name === "rock") {
    return stylesRock.backgroundRockOpacity
  };

  if (types[0].type.name === "psychic") {
    return stylesPsychic.backgroundPsychicOpacity
  };

  if (types[0].type.name === "fighting") {
    return stylesFighting.backgroundFightingOpacity
  };

  if (types[0].type.name === "ghost") {
    return stylesGhost.backgroundGhostOpacity
  };

  if (types[0].type.name === "dark") {
    return stylesDark.backgroundDarkOpacity
  };

  if (types[0].type.name === "dragon") {
    return stylesDragon.backgroundDragonOpacity
  };

  if (types[0].type.name === "ice") {
    return stylesIce.backgroundIceOpacity
  };

  if (types[0].type.name === "steel") {
    return stylesSteel.backgroundSteelOpacity
  };
};

export const dynamicBackgroundType = (types) => {
  if (types.type.name === "fire") {
    return stylesFire.backgroundFire
  };

  if (types.type.name === "grass") {
    return stylesGrass.backgroundGrass
  };

  if (types.type.name === "poison") {
    return stylesPoison.backgroundPoison
  };

  if (types.type.name === "flying") {
    return stylesFlying.backgroundFlying
  };

  if (types.type.name === "water") {
    return stylesWater.backgroundWater
  };

  if (types.type.name === "bug") {
    return stylesBug.backgroundBug
  };

  if (types.type.name === "normal") {
    return stylesNormal.backgroundNormal
  };

  if (types.type.name === "electric") {
    return stylesEletric.backgroundEletric
  };

  if (types.type.name === "ground") {
    return stylesGround.backgroundGround
  };

  if (types.type.name === "fairy") {
    return stylesFairy.backgroundFairy
  };

  if (types.type.name === "rock") {
    return stylesRock.backgroundRock
  };

  if (types.type.name === "psychic") {
    return stylesPsychic.backgroundPsychic
  };

  if (types.type.name === "fighting") {
    return stylesFighting.backgroundFighting
  };

  if (types.type.name === "ghost") {
    return stylesGhost.backgroundGhost
  };

  if (types.type.name === "dark") {
    return stylesDark.backgroundDark
  };

  if (types.type.name === "dragon") {
    return stylesDragon.backgroundDragon
  };

  if (types.type.name === "ice") {
    return stylesIce.backgroundIce
  };

  if (types.type.name === "steel") {
    return stylesSteel.backgroundSteel
  };
};

export const dynamicTypeIcon = (types) => {
  if (types.type.name === "grass") {
    return stylesGrass.grassPng
  };

  if (types.type.name === "fire") {
    return stylesFire.firePng
  };

  if (types.type.name === "water") {
    return stylesWater.waterPng
  };

  if (types.type.name === "bug") {
    return stylesBug.bugPng
  };

  if (types.type.name === "flying") {
    return stylesFlying.flyingPng
  };

  if (types.type.name === "normal") {
    return stylesNormal.normalPng
  };

  if (types.type.name === "poison") {
    return stylesPoison.poisonPng
  };

  if (types.type.name === "electric") {
    return stylesEletric.eletricPng
  };

  if (types.type.name === "ground") {
    return stylesGround.groundPng
  };

  if (types.type.name === "fairy") {
    return stylesFairy.fairyPng
  };

  if (types.type.name === "rock") {
    return stylesRock.rockPng
  };

  if (types.type.name === "psychic") {
    return stylesPsychic.psychicPng
  };

  if (types.type.name === "fighting") {
    return stylesFighting.fightingPng
  };

  if (types.type.name === "ghost") {
    return stylesGhost.ghostPng
  };

  if (types.type.name === "dark") {
    return stylesDark.darkPng
  };

  if (types.type.name === "dragon") {
    return stylesDragon.dragonPng
  };

  if (types.type.name === "ice") {
    return stylesIce.icePng
  };

  if (types.type.name === "steel") {
    return stylesSteel.steelPng
  };
}

export const dynamicBackgroundVectorPng = (types) => {
  if (types[0].type.name === "grass") {
    return stylesGrass.grassVector
  };

  if (types[0].type.name === "fire") {
    return stylesFire.fireVector
  };

  if (types[0].type.name === "water") {
    return stylesWater.vectorWaterPng
  };

  if (types[0].type.name === "bug") {
    return stylesBug.bugVector
  };

  if (types[0].type.name === "flying") {
    return stylesFlying.flyingVector
  };

  if (types[0].type.name === "normal") {
    return stylesNormal.normalVector
  };

  if (types[0].type.name === "poison") {
    return stylesPoison.poisonVector
  };

  if (types[0].type.name === "electric") {
    return stylesEletric.eletricVector
  };

  if (types[0].type.name === "ground") {
    return stylesGround.groundVector
  };

  if (types[0].type.name === "fairy") {
    return stylesFairy.fairyVector
  };

  if (types[0].type.name === "rock") {
    return stylesRock.rockVector
  };

  if (types[0].type.name === "psychic") {
    return stylesPsychic.psychicVector
  };

  if (types[0].type.name === "fighting") {
    return stylesFighting.fightingVector
  };

  if (types[0].type.name === "ghost") {
    return stylesGhost.ghostVector
  };

  if (types[0].type.name === "dark") {
    return stylesDark.darkVector
  };

  if (types[0].type.name === "dragon") {
    return stylesDragon.dragonVector
  };

  if (types[0].type.name === "ice") {
    return stylesIce.iceVector
  };

  if (types[0].type.name === "steel") {
    return stylesSteel.steelVector
  };
}

export const dynamicGradient = (types) =>{
  
}
