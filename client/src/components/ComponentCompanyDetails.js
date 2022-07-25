import React, { useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import  imgdireccion  from '../imagesrrss/direccion.png';
import  imgfacebook  from '../imagesrrss/facebook.png';
import  imginsta  from '../imagesrrss/instagram.png';
import  imgphone from '../imagesrrss/telefono.png';
import  imgwhatsapp  from '../imagesrrss/whatsapp.png';

const ComponentCompanyDetails = ({company}) => {

    const {_id, title, descriptioncompany, slogan, imgcompany, products, nameurlcompany, footer, colorpage   } = company;

    useEffect(() => {
        console.log(company)
    }, [company]) 
    
    
return(
    <>{ company &&  

    <div className="containercompanydetail" key ={_id}>
       
            <div className="nav-container">
                <h2>{title}</h2> 
                <h5>Menú</h5> 
                <h5>My Order</h5>
                <input type="text" placeholder="Email address" />
                <input type="text" placeholder="Password" />
                <Button variant="primary">Submit</Button>

            </div>


            <div className="mediumtext" >
                <div className="mediumtext-slogan">
                    <h5>Are you hungry?</h5>
                    <h2>Don't Wait!</h2> 
                </div> 
                <div className="mediumimagen">
                     <img src={imgcompany} alt="photoCompany"/>
                </div>
            </div>

            <div className="descriptioncompany">
                <h3>{slogan}</h3> 
                <p>{descriptioncompany}</p> 
            </div>
            <div className="CartitasPizza">
            { products?.map(products => (
            <Card.Body >
            <Link to={`/pizza/}`}> <img src={products.imageproduct}></img></Link>
            <Card.Title>{products.nameproduct}</Card.Title>
            <Card.Text>${products.price}</Card.Text>
            <Link to={`/pizza/`}><Button variant="primary">Buy it</Button></Link>
            </Card.Body>
            ))}
            </div>
        
           <div className="footerpage" >
                <img id ="rrssdirection" src={imgdireccion} alt="" />
                <p>{footer.address}</p>
                <img id ="rrssdirection" src={imgphone} alt="" />
                <p>{footer.phone}</p>
                <img id ="rrssdirection" src={imginsta} alt="" />
                <p>{footer.instagram}</p>
                <img id ="rrssdirection" src={imgwhatsapp} alt="" />
                <p>{footer.whatsapp}</p>
                <img id ="rrssdirection" src={imgfacebook} alt="" />
                <p>{footer.facebook}</p>
            </div>
            <div className="copyright">

            &copy; {new Date().getFullYear()} Copyright:{' '}
             <a className='text-dark' href='http://localhost:3000/'>
                Easy_HTML.com
            </a>
            </div>


    </div>
    }    </>
  );

}


export default ComponentCompanyDetails;