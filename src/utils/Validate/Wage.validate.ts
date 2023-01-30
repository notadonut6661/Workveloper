import { WageValidationCodes } from './../../data/Interfaces/WageValidationCodes.enum';

interface WageValidationOptions {
  min?: number;
  max?: number; 
}

type MinMaxWageValidationReturn = typeof defaultMinMaxWageValidationReturn;

const defaultMinMaxWageValidationReturn = {
  min: 'Valid' as WageValidationCodes,
  max: 'Valid' as WageValidationCodes
}
/** 
  * @param inputValues - Array that contains two values, first user input in minimal field and second user input into maximum field.
*/

export default function ValidateWage(inputValues: [string, string], options: WageValidationOptions):  MinMaxWageValidationReturn {
  const inputNumbers = inputValues.map(el => parseInt(el)) as [number, number];
  let validationCode: MinMaxWageValidationReturn = {...defaultMinMaxWageValidationReturn}; 

  if (!isNaN(inputNumbers[1]) && inputNumbers[0] > inputNumbers[1]) {
    validationCode.min = 'Minimal value is higher than maximum';
    validationCode.max = 'Minimal value is higher than maximum';
  }

  inputNumbers.forEach((el, index) => {
    const elName = (index === 0) ? 'min': 'max';

    console.log(el, index, elName);
    if (isNaN(el)) return;

    if (options.min !== undefined  && el < options.min) {
      validationCode[elName] = 'Lower';
      return;
    } 
    if (options.max !== undefined && el > options.max) {
      validationCode[elName] = 'Higher';
      return;
    }
  });

  return validationCode;
}