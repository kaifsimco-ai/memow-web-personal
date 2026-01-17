// Helper function for input styling

export const getInputClassName = (hasValue: boolean): string => `
  peer pl-12 h-12 bg-gray-100 rounded-4xl placeholder:text-gray-500
  focus:outline-none focus:ring-0 focus:ring-offset-0
  focus:border-2 focus:border-goldShade2 focus:bg-gray-50
  transition-all duration-200s
  ${hasValue ? 'border-2 border-goldShade2 bg-gray-50' : 'border-0'}
`
// Helper function for select styling

export const getSelectClassName = (hasValue: boolean): string => `
  peer pl-12 py-5 bg-gray-100 w-full rounded-4xl
  focus:outline-none focus:ring-0 focus:ring-offset-0
  focus:border-2 focus:border-goldShade2 focus:bg-gray-50
  transition-all duration-200
  ${hasValue ? 'border-2 border-goldShade2 bg-gray-50' : 'border-0'}
`