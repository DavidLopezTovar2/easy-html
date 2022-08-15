import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgdireccion from "../imagesrrss/direccion.png";
import imgfacebook from "../imagesrrss/facebook.png";
import imginsta from "../imagesrrss/instagram.png";
import imgphone from "../imagesrrss/telefono.png";
import imgwhatsapp from "../imagesrrss/whatsapp.png";

const ComponentCompanyDetails = ({ company }) => {
  const {
    _id,
    title,
    descriptioncompany,
    slogan,
    imgcompany,
    products,
    nameurlcompany,
    footer,
    colorpage,
  } = company;

  useEffect(() => {
    console.log(company);
  }, [company]);

  const showProduct = (product) => {
    alert(product.price);
  };

  return (
    <>
      {company && (
        <div className="containercompanydetail" key={_id}>
          <div className="nav-container">
            <h2>{title}</h2>
            <h5>Menú</h5>
            <h5>My Order</h5>
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="Password" />
            <Button variant="primary">Submit</Button>
          </div>

          <div className="mediumtext">
            <div className="mediumtext-slogan">
              <h5>¿Tienes hambre?</h5>
              <h2>¡No esperes!</h2>
            </div>
            <div className="mediumimagen">
              <img src={imgcompany} alt="photoCompany" />
            </div>
          </div>

          <div className="descriptioncompany">
            <h3>{slogan}</h3>
            <p>{descriptioncompany}</p>
          </div>
          <div className="CartitasPizza">
            {products?.map((products) => (
              <Card.Body>
                <Link to={"/"}>
                  <img src={products.imageproduct}></img>
                </Link>
                <Card.Title>{products.nameproduct}</Card.Title>
                <Card.Text>${products.price}</Card.Text>
                <Link to={`/pizza/`}>
                  <Button variant="primary">Buy it</Button>
                </Link>
              </Card.Body>
            ))}
          </div>

          <div className="footerpage">
            <img id="rrssdirection" src={imgdireccion} alt="" />
            <p className="text-dark">{footer.address}</p>
            <img id="rrssdirection" src={imgphone} alt="" />
            <p className="text-dark">{footer.phone}</p>
            <img id="rrssdirection" src={imginsta} alt="" />
            <p className="text-dark">{footer.instagram}</p>
            <img id="rrssdirection" src={imgwhatsapp} alt="" />
            <p className="text-dark">{footer.whatsapp}</p>
            <img id="rrssdirection" src={imgfacebook} alt="" />
            <p className="text-dark">{footer.facebook}</p>
          </div>
          <div className="copyright bg-dark text-white">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a className="text-white" href="http://localhost:3000/">
              Easy_HTML.com
            </a>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default ComponentCompanyDetails;
