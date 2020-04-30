import { get } from './get';

describe('get', () => {
  const tests: Array<[string,string]> = [
    ['get money', 'money'],
    ['show me big chungus', 'big+chungus'],
    ['get this bread', 'this+bread'],
    ['show bob and vegene', 'bob+and+vegene'],
    ['!alert', 'alert'],
    ["search well, that's just like, you're opinion, man", "well,+that's+just+like,+you're+opinion,+man"],
  ];

  tests.forEach(([test, expected]) =>
    it(`matches ${test}`, () => {
      const searchTerm = get.match(test)?.payload.searchTerm;
      expect(searchTerm).toEqual(expected);
    })); 
});