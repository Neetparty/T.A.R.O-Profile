import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from '../../styles/Home.module.css'

const Neet_Avartar = () => {

    return(
        <Stack direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src="https://www.pngrepo.com/png/81103/512/avatar.png"
                sx={{ width: 150, height: 150 }}
            />
            <h1 className={styles.NeetProfile}>Neetparty</h1>
        </Stack>
    )
}

export default Neet_Avartar;