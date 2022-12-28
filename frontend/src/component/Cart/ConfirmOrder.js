import React, { Fragment } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = 0;

  const realSubTotal = subtotal * 0.82

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + 0 + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Informacion de envio</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Nombre:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Telefono:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Direccion:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Tus articulos de pedido:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X S/ {(item.price).toFixed(2)} ={" "}
                      <b>S/ {(item.price * item.quantity).toFixed(2)}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Resumen de pedido</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>S/ {realSubTotal.toFixed(2)}</span>
              </div>
              {/*<div>
                <p>Shipping Charges:</p>
                <span>Gratis</span>
              </div>*/}
              <div>
                <p>IGV:</p>
                <span>S/ {tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>S/ {totalPrice.toFixed(2)}</span>
            </div>

            <button onClick={proceedToPayment}>Ir al area de pago</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
