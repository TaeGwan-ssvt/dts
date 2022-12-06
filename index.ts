import { getUser } from 'getUser'

getUser().then((value: string) => console.log(value))


// 실행방법 : tsc index.ts && node index.js
// https://it-eldorado.tistory.com/127
// https://spookyjelly.tistory.com/83