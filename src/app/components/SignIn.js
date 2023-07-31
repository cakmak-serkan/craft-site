"use client";
//import { updateSetup } from "../actions";
import styles from "../styles/SignIn.module.css";

export default function SignIn({onClose}) {                

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    //formData.append("setupID", appID);

    /* try {
      await updateSetup(formData);
      handleRefreshRecord(parseInt(appID));
      onClose(); // Close the popup after updating the setup
    } catch (error) {
      // Handle error
    } */
  };

  return (
    <div className="pop-up light-mode" style={{ width: "-webkit-fill-available", visibility: "visible", opacity: "1", top: "55%", color: "#333" }}>
      <div className="pop-up__title">
        <h6 id="AnswersPopupTitle">{"Sign in or create an account"}</h6>
        <svg onClick={onClose} className="close feather feather-x-circle" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
      </div>
      {/* <div className="pop-up__subtitle"> Sign in or create an account </div> */}

      <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "25px 20px" }}>
        {/* <input name="from" type="hidden" value={"/setups"} />
        <input name="setupID" type="hidden" value={appID} /> */}
        <div className="form-group">
          <label htmlFor={`email`}>Email address:</label>
          <input name="email" id={`EntryForEmail`} className="form-control" title="Email address" placeholder="Email address" />
        </div>
        <div className="form-group">
          <label htmlFor={`Password`}>Password:</label>
          <textarea name="Password" className="form-control" id={`Password`} />
        </div>
        <div className="checkbox-wrapper">
          <input name="rememberMe" id={`rememberMe`} className="checkbox" type="checkbox" defaultChecked={false} />
          <label htmlFor={`rememberMe`}>rememberMe</label>
        </div>

        <div className="content-button-wrapper">
          <button type="reset" onClick={onClose} className="content-button status-button open close">
            Cancel
          </button>
          <button type="submit" className="content-button status-button">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}