import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useTranslation } from 'react-i18next';

const Contact = ({ showSnackbar }) => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_v0y0jk1',
      'template_9381clu',
      {
        from_name: form.name,
        to_name: 'Samuel',
        from_email: form.email,
        to_email: 'samupiasecki@gmail.com',
        message: form.message,
      },
      'W5ui2B85DQyCDz-1X'
    )
      .then(() => {
        setLoading(false);
        showSnackbar(true);
        setForm({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        showSnackbar(false);
      });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{t("contact.getInTouch")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact.title")}.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contact.name")}</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contact.email")}</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contact.message")}</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder")}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl'
          >
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
