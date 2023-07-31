import fakeProductData from "@/app/lib/data";

export default function Drinks() {
    return (
          
    <div className="apps-card" style={{ overflow: "auto", marginTop:"20px" }}>
          {fakeProductData && fakeProductData.map(Prod => (
        <div key={Prod.productID} className="app-card">
          <span>{/* SVG path */}</span>
          <div className="app-card__subtext">{Prod.name}</div>

          <form onSubmit={event => event.preventDefault()} /* action={updateSetup} */ style={{ display: "flex", justifyContent: "space-between", flexGrow: "1" }}>
            <div className="app-card-buttons d-flex justify-content-between" style={{ width: "-webkit-fill-available" }}>
             {/*  <div className="checkbox-wrapper">
                <input name="isActive" type="checkbox" checked={isActive[setup.appID] || false} onChange={event => handleCheckboxChange(event, setup)} id={`formisActive-${setup.appID}`} className="checkbox" />
                <label htmlFor={`formisActive-${setup.appID}`}>Active</label>
              </div> */}
            {/*   <div className="d-flex align-items-end">
                <Link style={{ marginTop: "10px" }} href={`/questions/${setup.appID}?appName=${setup.name}`} passHref>
                  <button type="button" className="content-button status-button">  View </button>
                </Link>
                <div className="menu">
                  <button type="button" className={`dropdown ${activeDropdown === setup.appID ? "is-active" : ""}`} onClick={event => { event.stopPropagation(); handleDropdown(event, setup.appID); }}></button>
                  
                  {!isEditing[setup.appID] ? ( activeDropdown === setup.appID && (
                      <div className="dropdown is-active">
                        <ul style={{ border:"transparent", backgroundColor:"#614453", width: "48px", height: "83px", top: "-100px" }}>
                          <li onClick={event => handleEditClick(event, setup)}>
                              <i className="fa-solid fa-pen" style={{ color: "green" }}></i>
                          </li>
                          <li onClick={event => handleDeleteClick(event, setup)}>
                              <i className="fa-solid fa-trash" style={{ color: "red" }}></i>                            
                          </li>                          
                        </ul>
                      </div>
                    ) ) : ( <></> )}
                </div>
              </div> */}
            </div>
          </form>

        </div>
      ))}

   </div>
 
    );
  }
  