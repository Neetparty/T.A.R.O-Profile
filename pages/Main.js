//import MainStyle from '../styles/Main.module.css'
import { Carousel } from 'antd';
import { motion } from 'framer-motion'

const contentStyle = {
  height: '99vh',
  color: '#fff',
  lineHeight: '100vh',
  textAlign: 'center',
  background: '#8f8f8f',
};

const Main = () => {
    return (
        <div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.75 }}     
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Carousel dotPosition="bottom" autoplay>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </motion.div>
            <motion.div
                
            >
                <h1>Hi</h1>
            </motion.div>
        </div>
    )
}

export default Main