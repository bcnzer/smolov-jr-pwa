import { roundWeight } from '~/utils/round_weight'

test('round up', () => {
  expect(roundWeight(71.75)).toBe(72.5)
  expect(roundWeight(76.875)).toBe(77.5)
  expect(roundWeight(82)).toBe(82.5)
  expect(roundWeight(87.125)).toBe(87.5)
})

test('round down', () => {
  expect(roundWeight(71.24)).toBe(70)
  expect(roundWeight(77.875)).toBe(77.5)
  expect(roundWeight(83)).toBe(82.5)
  expect(roundWeight(88.74)).toBe(87.5)
})