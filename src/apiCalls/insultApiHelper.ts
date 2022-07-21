import {SAMPLE_DATA} from 'interfaces/insultDTO'

export const GetRandomInsult = () => {
  let insult = randomiseSampleInsult()
  return {data: insult, error: false, errorMessage: ''}
}

let randomiseSampleInsult = (): string => {
  let randomTestInsult = SAMPLE_DATA[Math.floor(Math.random() * SAMPLE_DATA.length)]
  return randomTestInsult.pre + randomTestInsult.suff
}
