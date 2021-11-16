import Header from "./Header";
import Footer from "./Footer";

const layout = ({ children }) => {
    return ( 
        <div className='content'>
            <Header />
            { children }
            <Footer />
        </div>
     );
}
 
export default layout;