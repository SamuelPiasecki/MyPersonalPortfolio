import { styles } from '../styles'
import { github, instagram, linkedin } from '../assets';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className='relative w-full h-[440px] mx-auto'>
      <div className={`${styles.paddingX} absolute 
        inset-0 top-[120px] max-w-7xl mx-auto flex
        flex-row item-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hiIm")}<span className='text-[#915eff]'> Samuel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("IDevelop")}
          </p>
          <div
            className='flex gap-3 mt-3'
          >
            <span
              onClick={() => window.open('https://github.com/SamuelPiasecki', '_blank')}
              className='cursor-pointer'
            >
              <img src={github} alt="Github" className='w-9 h-9 hover:w-8 hover:h-8' />
            </span>
            <span
              onClick={() => window.open('https://www.linkedin.com/in/samuel-piasecki/', '_blank')}
              className='cursor-pointer'
            >
              <img src={linkedin} alt="LinkedIn" className='w-9 h-9 hover:w-8 hover:h-8' />
            </span>
            <span
              onClick={() => window.open('https://www.instagram.com/samupiasecki/', '_blank')}
              className='cursor-pointer'
            >
              <img src={instagram} alt="Instagram" className='w-9 h-9 hover:w-8 hover:h-8' />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero