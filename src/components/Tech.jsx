import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt={technology.name} width={112} height={112} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')