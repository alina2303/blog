import { BaseElement } from '../lib/baseElement'
import ElementList from './element-list'

type Props = {
  content: BaseElement[]
}


const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ElementList elements={content}   />
    </div>
  )
}

export default PostBody