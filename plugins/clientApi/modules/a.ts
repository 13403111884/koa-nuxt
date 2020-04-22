let i = 3
i = i + 1
if ((i + 1) > 2) {
  i = 2
}

function ad (a: string, b?: number) {
  if (b) {
    return a + b + '3'
  } else {
    return a + i + '3'
  }
}

export default {
  ad
}
