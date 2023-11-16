import styles from "./BasicLayout.module.scss"
import { Container } from "semantic-ui-react";
import { TopBar } from "@/components/Layout";
import classNames from "classnames";

export function BasicLayout(props) {

    const {children, isOpenSearch = false, isContainer = false, relative = false} = props;

  return (
    <>
     <TopBar isOpenSearch={isOpenSearch}/>
     
      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container> {children} </Container> : children}
        </div>
      </Container>

      {/* TODO:footer */}
    
    </>
  )
}
