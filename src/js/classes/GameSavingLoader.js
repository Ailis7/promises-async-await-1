import json from '../functions/parser';
import read from '../functions/reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static load() {
    return read().then((e) => json(e).then((p) => new GameSaving(p)));
  }
}

export default GameSavingLoader;
