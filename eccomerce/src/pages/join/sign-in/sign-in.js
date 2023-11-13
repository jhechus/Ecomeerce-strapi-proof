import  Link  from "next/link"
import { JoinLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth"
import styles from "./sign-in.module.scss";

export default function signinPage() {
  return (

    <>
      <JoinLayout>
        <div className={styles.SignIn}>
          <h3> Iniciar Sesion </h3>

          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up"> Aun no tienes una cuenta? </Link>
          </div>

        </div>
      </JoinLayout>
    </>
  )
}
