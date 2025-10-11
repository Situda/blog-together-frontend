// 文章/项目展示区域

interface ContentProps {
  contentType: string
  children?: React.ReactNode
  tags?: string[]
}

function Contents(props: ContentProps) {
  return (
    <div className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{props.contentType}</h1>
        <ul className="flex flex-wrap gap-2 mb-8">
          <li className="">全部</li>
          <li>深度学习</li>
          <li>Python</li>
        </ul>
        <ul className="contents">
        </ul>
      </div>
    </div>
  )
}

export default Contents;