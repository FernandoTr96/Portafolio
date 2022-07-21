import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BiMailSend } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';
import { MdAlternateEmail } from 'react-icons/md';
import { BsFillPencilFill } from 'react-icons/bs';
import Image from 'next/image';
import style from '../../styles/ContactSection.module.css'
import { Loader } from '../ui/Loader';
import gsap from 'gsap';

interface formData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export const ContactSection = () => {

  const [t] = useTranslation("global");
  const [loader, setLoader] = useState<boolean>(false);
  const $contactForm = useRef(null);

  const validate = (values: formData) => {

    let errors: formData = {};

    if (!values.name || !values.email || !values.subject || !values.message) {
      toast(t("contactSection.errors.empty"), {
        icon: '🔥',
      });
      errors.name = "isEmpty";
      errors.email = "isEmpty";
      errors.subject = "isEmpty";
      errors.message = "isEmpty";
      return errors;
    }

    if (!/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(`${values.email}`)) {
      toast(t("contactSection.errors.email"), {
        icon: '🔥',
      });
      errors.email = "isNotValid";
      return errors;
    }

  };

  const onSubmit = async (data: formData, formikBag: any) => {
    setLoader(true);
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const json = await response.json();

    if (json.ok) {
      toast.success(t("contacSection.successMessage"));
    }
    else {
      toast(`Error: ${json.msg}`, {
        icon: '❌',
      });
    }
    formikBag.resetForm({});
    setLoader(false);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
  });

  useEffect(()=>{
    gsap.fromTo(
      $contactForm.current,
      {
        x: -1000
      },
      {
        scrollTrigger:{
          trigger:$contactForm.current
        },
        duration: 1,
        x: 0
      }
    )
  },[])

  return (
    <section id={t("navigationLinks.contact")} className={`screen ${style.contactSection}`}>
      <div className={`${style.titleBox}`}>
        <h3 className="doubleTitle">{t("contactSection.mainTitle")}</h3>
      </div>
      <div ref={$contactForm} className={`${style.contactFormContainer}`}>
        <article>
          <Image src='/img/message.gif' alt='email' layout='fill' objectFit='cover' />
        </article>
        <form onSubmit={formik.handleSubmit}>
          <div className={style.inputBox}>
            <input
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
              required
            />
            <label><GoPerson /> {t("contactSection.formFields.name")}</label>
          </div>
          <div className={style.inputBox}>
            <input
              type="text"
              autoComplete="new-password"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              required
            />
            <label><MdAlternateEmail /> {t("contactSection.formFields.email")}</label>
          </div>
          <div className={style.inputBox}>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.subject}
              name="subject"
              required
            />
            <label><BsFillPencilFill /> {t("contactSection.formFields.subject")}</label>
          </div>
          <div className={style.inputBox}>
            <textarea
              rows={10}
              placeholder={t("contactSection.formFields.message")}
              onChange={formik.handleChange}
              value={formik.values.message}
              name="message"
            ></textarea>
          </div>
          <div className={style.formButton}>
            {
              loader ?
              <Loader src='/img/loader.gif' w={25} h={25} />
                :
                <button>
                  <BiMailSend /> {t("contactSection.formButton")}
                </button>
            }
          </div>
        </form>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </section>
  )
}

