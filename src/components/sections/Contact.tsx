import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import { Wedding } from '@models/wedding'
import Section from '@shared/Section'
import ImageFrame from '@shared/ImageFrame'
import Video from '@shared/Video'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DefaultLayout from '@shared/DefaultLayout'
import { MdPhoneIphone } from '@react-icons/all-files/md/MdPhoneIphone'
import { AiFillMessage } from '@react-icons/all-files/ai/AiFillMessage'
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown'

const cx = classNames.bind(styles)

function Contact({
  groom,
  bride,
}: {
  groom: Wedding['groom']
  bride: Wedding['bride']
}) {
  return (
    <DefaultLayout>
      <Section className={cx('contact')}>
        <ImageFrame />
        <Video assets={'contact_video'} />

        <div>
          <div className={cx('wrap-contact')}>
            <div className={cx('box')}>
              <h1>송승수</h1>
              <div className={cx('contact-box')}>
                <a href={`tel: ${groom.phoneNumber}`} className={cx('button')}>
                  <MdPhoneIphone />
                </a>
                <a href={`sms: ${groom.phoneNumber}`} className={cx('button')}>
                  <AiFillMessage />
                </a>
              </div>
              <div className={cx('parents')}>
                <div className={cx('tag')}>신랑측 혼주</div>
                <div className={cx('parents-contact')}>
                  <h2>
                    송석곤 <span>아버님</span>
                  </h2>
                  <div className={cx('contact-box')}>
                    <a
                      href={`tel: ${groom.parents[0].phoneNumber}`}
                      className={cx('button')}
                    >
                      <MdPhoneIphone />
                    </a>
                    <a
                      href={`sms: ${groom.parents[0].phoneNumber}`}
                      className={cx('button')}
                    >
                      <AiFillMessage />
                    </a>
                  </div>
                </div>
                <div className={cx('parents-contact')}>
                  <h2>
                    김옥경 <span>어머님</span>
                  </h2>
                  <div className={cx('contact-box')}>
                    <a
                      href={`tel: ${groom.parents[0].phoneNumber}`}
                      className={cx('button')}
                    >
                      <MdPhoneIphone />
                    </a>
                    <a
                      href={`sms: ${groom.parents[1].phoneNumber}`}
                      className={cx('button')}
                    >
                      <AiFillMessage />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('box')}>
              <h1>김보라</h1>
              <div className={cx('contact-box')}>
                <a href={`tel: ${bride.phoneNumber}`} className={cx('button')}>
                  <MdPhoneIphone />
                </a>
                <a href={`sms: ${bride.phoneNumber}`} className={cx('button')}>
                  <AiFillMessage />
                </a>
              </div>
              <div className={cx('parents')}>
                <div className={cx('tag')}>신부측 혼주</div>
                <div className={cx('parents-contact')}>
                  <h2>
                    김동회 <span>아버님</span>
                  </h2>
                  <div className={cx('contact-box')}>
                    <a
                      href={`tel: ${bride.parents[0].phoneNumber}`}
                      className={cx('button')}
                    >
                      <MdPhoneIphone />
                    </a>
                    <a
                      href={`sms: ${bride.parents[0].phoneNumber}`}
                      className={cx('button')}
                    >
                      <AiFillMessage />
                    </a>
                  </div>
                </div>
                <div className={cx('parents-contact')}>
                  <h2>
                    김문정 <span>어머님</span>
                  </h2>
                  <div className={cx('contact-box')}>
                    <a
                      href={`tel: ${bride.parents[1].phoneNumber}`}
                      className={cx('button')}
                    >
                      <MdPhoneIphone />
                    </a>
                    <a
                      href={`sms: ${bride.parents[1].phoneNumber}`}
                      className={cx('button')}
                    >
                      <AiFillMessage />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cx('account')}>
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.9 }}
            >
              <Link
                to="/contact/account-viewer"
                className={cx('account_trigger_button')}
              >
                마음전하실 곳
                <IoIosArrowDown className={cx('animate_icon')} />
              </Link>
            </motion.button>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  )
}

export default Contact
