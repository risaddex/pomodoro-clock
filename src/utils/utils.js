export const parseTime = (time) => {

  const ss = time % 60 < 10
    ? `0${time % 60}`
    : time % 60

  const mm = parseInt(time / 60) < 10
    ? `0${parseInt(time / 60)}`
    : parseInt(time / 60)

  return `${mm}:${ss}`
}