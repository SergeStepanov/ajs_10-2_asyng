/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    GameSavingLoader.load().then((resolve) => {
      console.log(resolve);
    });
  } catch (error) {
    console.log(error);
  }
})();
