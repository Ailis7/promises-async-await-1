import json from '../functions/parser';
import read from '../functions/reader';


class GameSavingLoader {
  static load() {
    return read().then((e) => json(e).then((p) => p));
  }
}

export default GameSavingLoader;
