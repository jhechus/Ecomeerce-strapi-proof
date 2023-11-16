import styles from './TopBar.module.scss'
import Link from 'next/link'
import { Account } from '../Account'
import { Menu } from '../Menu'
import { Image } from 'semantic-ui-react'

export function TopBar(props) {

    const { isOpenSearch } = props

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
            <Image src='/images/logo2.png' alt='Logo'/>
        </Link>
      </div>

        <div className={styles.center}>
            <Menu isOpenSearch={isOpenSearch} />
        </div>

        <div className={styles.right}>
            <Account />
        </div>

    </div>
  )
}
