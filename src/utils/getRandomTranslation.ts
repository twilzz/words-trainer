export function getRandomTranslation(arr: string[]) {
  const copiedArray = [...arr]
  const selectedTranslation = []
  for (let index = 0; index < 3; index++) {
    const randomIndex = Math.floor(Math.random() * copiedArray.length)
    selectedTranslation.push(copiedArray.splice(randomIndex, 1)[0])
  }
  return selectedTranslation
}
