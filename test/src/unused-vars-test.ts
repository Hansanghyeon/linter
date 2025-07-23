// Test file for unused variables pattern matching
interface TestProps {
  _unused: string;
  used: number;
  P: boolean;
}

function testFunction(
  used: string,
  _unusedParam: number,
  P: boolean,
  flow: any
) {
  console.log(used);
  
  // These should not trigger unused-vars warnings
  const _unusedVar = 'should be ignored';
  const _ = 'underscore should be ignored';
  const P_constant = 'P prefixed should be ignored';
  
  // This should trigger warning if not used
  const normalVar = 'should warn if unused';
  
  try {
    console.log('test');
  } catch (_error) {
    // Caught error with underscore should be ignored
  }
  
  const [_first, second, ...rest] = [1, 2, 3, 4, 5];
  console.log(second, rest);
  
  const { _unusedProp, usedProp, ...restProps } = {
    _unusedProp: 1,
    usedProp: 2,
    other: 3
  };
  
  console.log(usedProp, restProps);
}

export { testFunction };