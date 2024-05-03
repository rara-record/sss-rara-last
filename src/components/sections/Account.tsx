import classNames from 'classnames/bind'
import styles from './Account.module.scss'
import Section from '@shared/Section'
import { Link } from 'react-router-dom'
import { Person } from '@models/wedding'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Accordion from '@shared/Accordion'
import SubLayout from '@shared/SubLayout'
import Share from '@components/sections/Share'
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack'

const cx = classNames.bind(styles)

const groom = {
  name: '송승수',
  account: {
    bankName: '우리',
    accountNumber: '1002451599153',
    kakaopayLink: 'https://qr.kakaopay.com/FMahgfQoV',
  },
  phoneNumber: '01044484546',
  parents: [
    {
      name: '송석곤',
      account: {
        bankName: 'KB국민',
        accountNumber: '090240260316',
      },
      phoneNumber: '01089679488',
    },
    {
      name: '김옥경',
      account: {
        bankName: 'KB국민',
        accountNumber: '014211765737',
      },
      phoneNumber: '01092619488',
    },
  ],
}
const bride = {
  name: '김보라',
  account: {
    bankName: '카카오뱅크',
    accountNumber: '3333169758253',
    kakaopayLink: 'https://qr.kakaopay.com/FVJQ7SD3D',
  },
  phoneNumber: '01022281784',
  parents: [
    {
      name: '김동회',
      account: {
        bankName: 'KB국민',
        accountNumber: '253210105287',
      },
      phoneNumber: '01047219596',
    },
    {
      name: '김문정',
      account: {
        bankName: '우리',
        accountNumber: '31403847402002',
      },
      phoneNumber: '01023731241',
    },
  ],
}
const date = '2024-06-16T13:40:00'

const Account = () => {
  return (
    <SubLayout>
      <Section className={cx('account')}>
        <div className={cx('inner')}>
          <div>
            <div className={cx('wrap-header')}>
              <Link to="/contact" className={cx('location_back_button')}>
                <IoMdArrowRoundBack className={cx('animate_icon')} />
              </Link>
              <div className={cx('txt-title')}>
                마음전하실 곳
                <span className={cx('txt-subtitle')}>(계좌번호)</span>
              </div>
            </div>
          </div>
          <div className={cx('wrap-header-text')}>
            <p>혹 참석하지 못하시더라도 축하해 주시는 마음은</p>
            <p>잊지 않고 간직하며 행복하게 잘 살겠습니다.</p>
          </div>

          <div>
            <Accordion label="신랑측 계좌번호 확인하기">
              <ContactInfo name={groom.name} account={groom.account} />
              <ContactInfo
                name={groom.parents[0].name}
                account={groom.parents[0].account}
              />
              <ContactInfo
                name={groom.parents[1].name}
                account={groom.parents[1].account}
              />
            </Accordion>
            <Accordion label="신부측 계좌번호 확인하기">
              <ContactInfo name={bride.name} account={bride.account} />
              <ContactInfo
                name={bride.parents[0].name}
                account={bride.parents[0].account}
              />
              <ContactInfo
                name={bride.parents[1].name}
                account={bride.parents[1].account}
              />
            </Accordion>
          </div>
        </div>
        <Share groomName={groom.name} brideName={bride.name} date={date} />
      </Section>
    </SubLayout>
  )
}

function ContactInfo({ name, account }: Person) {
  return (
    <div className={cx('wrap_account')}>
      <div className={cx('wrap_account_info')}>
        <div>{`예금주 : ${name}`}</div>
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
      </div>
      <ul className={cx('wrap_buttons')}>
        <li>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사가 완료되었습니다.')
            }}
          >
            <button className={cx('button')}>복사하기</button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink != null ? (
          <li>
            <button type="button">
              <a
                href={account.kakaopayLink}
                className={cx('button', 'kakao')}
                target="_blank"
                rel="noreferrer"
              >
                카카오페이
              </a>
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Account
