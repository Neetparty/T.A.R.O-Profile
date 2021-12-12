import Index from './index'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from '../styles/Home.module.css'
import Layout from '../comps/Layout'


const Zcross = () => {
    return(
        <Layout>
          <Index>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp"
              src="https://pbs.twimg.com/media/FEpRguhVEAMobEw?format=jpg&name=medium"
              sx={{ width: 300, height: 300 }}
              />
                <h1>ZCross</h1>
            </Stack>
                <h1>My Work</h1>
            <Stack>
              <div className={styles.NeetContent}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/-wgjoWixG38" title="YouTube video player"
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NgXLeuC0Suw" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
              </div>
            </Stack>
          </Index>
        </Layout>
    )
}

export default Zcross
