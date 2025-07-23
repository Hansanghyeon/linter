// This file contains intentionally problematic code for testing
interface TestProps {
  unusedField: string
  usedField: number
}

function testFunction(param1: string, unusedParam: number, flow: any) {
  console.log(param1)

  const unusedVariable = 'this should warn'
  const _ignoredVar = 'this should be ignored'

  // Test camelCase rule
  const snake_case_var = 'test'
  console.log(snake_case_var)

  try {
    throw new Error('test')
  } catch (error) {
    // Unused catch variable should warn
  }

  const [first, second] = [1, 2]
  console.log(second)
}

export { testFunction }
