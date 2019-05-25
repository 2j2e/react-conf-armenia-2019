import { format } from 'date-fns'

function getCurrentTime() {
  return format(new Date(), 'MMMM DD, YYYY hh:mm')
}

export { getCurrentTime }
