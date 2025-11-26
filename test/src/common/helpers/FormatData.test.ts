import { FormatData } from '../../../../src/common/helpers/FormatData';

describe('Testing about helper FormatData', () => {

  test('FormatData should return a date validated from "yyyy-mm-dd" to "dd mmm yyyy"', () => {
    const date = '2025-01-01';
    const valueExpected = '01 ene 2025';
    const resultDate = FormatData(date);
    expect(resultDate).toBe(valueExpected);

    const date2 = '2025-07-09';
    const valueExpected2 = '09 jul 2025';
    const resultDate2 = FormatData(date2);
    expect(resultDate2).toBe(valueExpected2);
  });
  
  test('FormatData should return a string value', () => {
    const date = '2025-07-09';
    const resultDate = FormatData(date);
    expect(typeof resultDate).toBe('string');
  });
})