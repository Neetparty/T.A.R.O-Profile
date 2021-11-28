import Index from './index'
import styles from '../styles/Home.module.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Neetparty = () => {
    return(
        <Index>
            <div className={styles.NeetContent}>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://www.pngrepo.com/png/81103/512/avatar.png"
                        sx={{ width: 150, height: 150 }}
                    />
                    <h1 className={styles.NeetProfile}>Neetparty</h1>
                </Stack>
                <div className={styles.NeetGrid} >
                    <div className={styles.NeetAbout}>
                        <h2>Hi I am about!</h2>
                    </div>
                    <div className={styles.NeetItem-1}>
                        <Card className={styles.NeetCard} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className={styles.NeetItem-2}>
                        <Card className={styles.NeetCard} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </Index>
    )
}

export default Neetparty