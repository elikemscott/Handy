import React from "react";
import image4 from "../images/check.png";
import HomeNav from "./HomeNav";

export default function ConfirmPage() {
  return (
    <div className="confirm_container">
      <HomeNav />
      <div className="confirm_child">
        <img src={image4} className="confirm_image" />
        <p className="invoice_success">Invoice sent successfully</p>
      </div>
    </div>
  );
}
