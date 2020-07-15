import GameSavingLoader from './classes/GameSavingLoader'; //
import 'regenerator-runtime/runtime';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
  return saving;
}, (error) => {
  console.log(error);
});
