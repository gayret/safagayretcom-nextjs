import dayjs from 'dayjs'
require('dayjs/locale/tr')

const dateFormatter = (date) => {
  return dayjs(date).locale('tr').format('DD MMM YY')
}

export default dateFormatter
