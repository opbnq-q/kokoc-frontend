export const dateConversion = (createdAt: string): string => {
  const date = new Date(createdAt)
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    "декабря",
  ]
  return `${date.getDate()} ${months[date.getMonth()]}`
}
