import GameSavingLoader from '../GameSavingLoader';

test('test GameSavingLoader async/await', async () => {
  const result = {
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  };

  const data = await GameSavingLoader.load().then();

  expect(data).toEqual(result);
});
