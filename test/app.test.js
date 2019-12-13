import Character from '../src/app';

test('damage inflicted', () => {
  const strange = new Character('Strange', 'Magician');
  strange.damage(5);
  expect(strange.health).toBe(97);
});

test('incorrect data error', () => {
  const strange = new Character('Strange', 'Magician');
  expect(() => strange.damage('qwerty')).toThrow('Damage points must be a number');
});
