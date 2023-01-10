import "./Payment.scss";

import cData from "./data/data.json";

//assets
//dropdown logojhgjhg
import drop_logo from "./assets/dropdown.png";
import correct_logo from "./assets/correct.png";
import { useState } from "react";



function Payment() {
  const tempHolder = [];
  const addPaymentCon = () => {
    for (let i = 0; i < cData.projects.length; i++) {
      tempHolder.push( <PaymentCon title={cData.projects[i].data.Website_URL} id={cData.projects[i].p_id} status={cData.projects[i].p_status} />);
    }
    return tempHolder;
  };

  return (
    <>
      {addPaymentCon()}
    </>
  );
}

//payment-con
function PaymentCon(props) {
  const [open, setOpen] = useState(false);

  const projectStatus = () => {
    const status = props.status;
    //Active Pending Ended
    if (status === "Ended") {
      return <p style={{ color: "#7DCE94" }}>Project Completed</p>;
    } else if (status === "Active") {
      return <p style={{ color: "#FFC300" }}>Active</p>;
    } else if(status === "Pending"){
      return <p style={{ color: "#F76262" }}>Project Pending</p>;
    }else{
      throw new Error("Status code invalid");
    }
  };

  return (
    <>
      <div className="payment-con">
        <div className="payment-header" onClick={() => setOpen(!open)}>
          <div className="header-title">
            <p>{props.title}</p>
          </div>
          <div className="header-id">
            <p>{props.id}</p>
          </div>
          <div className="header-status">{projectStatus()}</div>
          <div className="header-logo">
            <img src={drop_logo} className={`${open ? "active" : ""}`} alt="" />
          </div>
        </div>

        <div className={`payment-dropdown ${open ? "active" : ""}`}>
          <Tranch paid={cData.Tranche_Model_data.tranche1_payment} title="Tranch - 1" />
          <Tranch paid={cData.Tranche_Model_data.tranche2_payment} title="Tranch - 2" />
        </div>
      </div>
    </>
  );
}

//tranch
function Tranch(props) {
  const paid = props.paid;

  const statusValidate = () => {
    if (paid) {
      return <img src={correct_logo} alt="" />;
    } else {
      return <p>Unpaid</p>;
    }
  };

  return (
    <>
      <div className="tranch-con">
        <div className="tranch-title">
          <p>{props.title}</p>
        </div>
        <div className="tranch-status">{statusValidate()}</div>
        <div className="tranch-btn-con">
          <button className={`${paid ? "paid" : ""}`}>Pay Now</button>
        </div>
      </div>
    </>
  );
}

export default Payment;
