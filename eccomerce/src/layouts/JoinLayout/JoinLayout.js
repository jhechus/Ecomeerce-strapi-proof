import Link from 'next/link'
import { Icon, Image } from "semantic-ui-react"
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks'
import styles from './Joinlayout.module.scss'

export function JoinLayout(props) {

  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  if(user) {
    router.push('/')
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}> 
        <Link href="/">
          <Image src="/images/logo2.png" alt="logo"></Image>
        </Link>

        <Link href="/">
          <Icon name='close'></Icon>
        </Link>
      </div>

      <div className={styles.blockleft}> {children} </div>

      <div className={styles.blockRight}> </div>
    </div>
  )
}
