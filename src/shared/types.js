// @flow

export type Card = {
  effect: string,
  id: string,
  value: number,
}

export type Player = {
  cards: [Card],
  hp: number,
  id: string,
  maxHp: number,
  name: string,
  shield: string,
}

export type Monster = {
  hp: number,
  id: string,
  image: string,
  maxHp: number,
  name: string,
  shield: string,
}

export type Game = {
  currentTurn: number,
  id: string,
  maxTurns: number,
  monster: Monster,
  player: Player,
  turnsLeft: number,
}
