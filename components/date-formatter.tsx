import { parseISO, format } from 'date-fns';
import { AiFillCalendar } from 'react-icons/ai';

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <div className='flex gap-2 items-center'>
      <AiFillCalendar style={{ color: "#e6007a" }} />
      <time
        dateTime={dateString}
        className="post-date">
        {format(date, 'LLLL	d, yyyy')}
      </time>
    </div>
  )
}

export default DateFormatter
