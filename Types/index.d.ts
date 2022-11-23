declare module 'getCircle' {
  const getCirle: (r: number) => number
  export {getCirle}
}

declare module 'getUser' {
  const getUser: () => Promise<any>
  export {getUser}
}
