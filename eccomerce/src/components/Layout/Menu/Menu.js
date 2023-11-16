import styles from './Menu.module.scss'
import { Image, Icon, Input } from 'semantic-ui-react';
import { Platform } from '@/api';
import { useState, useEffect } from 'react';

const platformCtrl = new Platform();

export function Menu(props) {

    const { isOpenSearcj } = props;
    const [ platforms, setPlatforms ] = useState(null)
    console.log(platforms);

    useEffect(() => {
        (async () => {
            try{
                const response = await platformCtrl.getAll();
                setPlatforms(response.data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

  return (
    <div>
      MENU
    </div>
  )
}
