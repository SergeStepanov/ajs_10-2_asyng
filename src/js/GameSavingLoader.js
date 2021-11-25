/* eslint-disable class-methods-use-this */
import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const res = await read();
    const resolve = await json(res);
    return new GameSaving(resolve);
  }
}
