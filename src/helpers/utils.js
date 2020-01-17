export const getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()))
}

export const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomDate = (start, end, startHour, endHour) => {
  const date = new Date(+start + Math.random() * (end - start))
  const hour = startHour + Math.random() * (endHour - startHour) | 0
  return date.setHours(hour)
}

export const getArrayOfSpecifiedLength = (dataGetter, length) => {
  const array = new Array(length).fill(``)
  array.forEach((item, i) => {
    array[i] = dataGetter()
  })
  return array
}

export const getRandomArray = (array) => {
  array = shuffleArray(array)
  array.length = getRandomInt(1, 2)
  return array
}

export const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInt(0, array.length - 1)
  return array[randomIndex]
}

export const shuffleArray = (array) => {
  const newArray = array.slice()
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const deepMerge = (target, source) => {
  const isObject = (obj) => obj && typeof obj === `object`

  if (!isObject(target) && !isObject(source)) {
    return source
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key]
    const sourceValue = source[key]

    if (
      isObject(targetValue) && !Array.isArray(targetValue) &&
      isObject(sourceValue) && !Array.isArray(sourceValue)
    ) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue)
    } else {
      target[key] = sourceValue
    }
  })

  return target
}
