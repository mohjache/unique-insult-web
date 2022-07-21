import insults from 'sampledata.json'

export const GetRandomInsult = () => {
  let insult = randomiseSampleInsult()
  return {data: insult, error: false, errorMessage: ''}
}

let randomiseSampleInsult = (): string => {
  let randomTestInsult = insults[Math.floor(Math.random() * insults.length)]
  return randomTestInsult.pre + randomTestInsult.suff
}
