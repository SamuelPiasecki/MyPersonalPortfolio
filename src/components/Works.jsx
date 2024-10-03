import { styles } from '../styles'
import github from '/assets/github.png'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { useTranslation } from 'react-i18next'
import Tooltip from '@mui/material/Tooltip'

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {

  const { t } = useTranslation();

  return (
    <div
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          {
            source_code_link !== '' &&
            <Tooltip
             title={t("tooltips.githubRepoLink")}
             slotProps={{
               popper: {
                 modifiers: [
                   {
                     name: 'offset',
                     options: {
                       offset: [0, -5],
                     },
                   },
                 ],
               },
             }}
           >
             <button
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="Github" className='w-1/2 h-1/2 object-contain' />
            </button>
           </Tooltip>
          }
        </div>
      </div>


      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{t(description)}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

const Works = () => {

  const { t } = useTranslation();

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>{t("projects.myWork")}</p>
        <h2 className={styles.sectionHeadText}>{t("projects.title")}.</h2>
      </div>

      <div className='w-full flex'>
        <p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t("projects.inThisSection")}
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')