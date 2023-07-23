import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <div className='flex gap-2 items-center text-gray-500' >
      <time
        dateTime={dateString}
        >
        {format(date, 'LLLL	d, yyyy')}
      </time>
    </div>
  )
}

export default DateFormatter
