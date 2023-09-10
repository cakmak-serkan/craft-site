import fakeProductData from "@/app/lib/data";
import styles from "@/app/styles/menu.module.css";

export default function Drinks() {
  return (
    <>
      <div className="row" style={{ margin: "inherit", width: "100%" }}>
        {/* Left Col (Menu) */}
        <div className="col-4" style={{ padding: "20px" }}>
          <h4> Drinks </h4>
          <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
            <li> Espresso Drinks </li>
            <li> Brewed Coffee</li>
            <li> Iced Coffee & Cold Brew</li>
            <li> Hot Tea</li>
            <li> Iced Tea</li>
            <li> Starbucks Refresha® Drink</li>
            <li> Frappuccino® Blended Beverages</li>
            <li> Hot Chocolate & Other Drinks</li>
            <li> Bottled Drinks</li>
          </ul>

          <h4> Food </h4>
          <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
            <li>Breakfast</li>
            <li>Bakery Treats</li>
            <li>Sandwiches & Toasties</li>
            <li>Chocolate & Snacks</li>
          </ul>

          <h4> At Home </h4>
          <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
            <li> Item #1</li>
            <li> Item #1</li>
            <li> Item #1</li>
            <li> Item #1</li>
            <li> Item #1</li>
            <li> Item #1</li>
            <li> Item #1</li>
            <li> Item #1</li>
            <li> Item #1</li>
          </ul>
        </div>

        {/* Right Col */}
        <div
          className="col"
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div className={styles.gridContainer}>
            <h3>Drinks</h3>
            <div
              className="apps-card"
              style={{ width: "-webkit-fill-available", marginLeft: "-10px" }}
            >
              {fakeProductData &&
                fakeProductData.map((Prod) => (
                  <div key={Prod.productID} className="app-card">
                    <div className="app-card__img">
                      {" "}
                      <img src="https://th.bing.com/th/id/R.aa72e6c4f1c61e6b5f3ffa098187a794?rik=7obujRhvzeKv9Q&pid=ImgRaw&r=0"></img>{" "}
                    </div>
                    {/* https://c1.klipartz.com/pngpicture/554/86/sticker-png-tea-cup-coffee-mug-drawing-coffee-cup-drink-doodle-saucer.png */}

                    <div className="app-card__subtext">{Prod.name}</div>

                    <form
                      onSubmit={(event) => event.preventDefault()}
                      /* action={updateSetup} */ style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: "1",
                      }}
                    >
                      <div
                        className="app-card-buttons d-flex justify-content-between"
                        style={{ width: "-webkit-fill-available" }}
                      >
                        {/*  <div className="checkbox-wrapper">
                         <input name="isActive" type="checkbox" checked={isActive[setup.appID] || false} onChange={event => handleCheckboxChange(event, setup)} id={`formisActive-${setup.appID}`} className="checkbox" />
                         <label htmlFor={`formisActive-${setup.appID}`}>Active</label>
                       </div> 
                  */}
                        {/* <div className="d-flex align-items-end">
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
          </div>

          <div className={styles.gridContainer}>
            <h3>Food</h3>
            <div
              className="apps-card"
              style={{ width: "-webkit-fill-available", marginLeft: "-10px" }}
            >
              {fakeProductData &&
                fakeProductData.map((Prod) => (
                  <div
                    key={Prod.productID}
                    className="app-card"
                    style={{
                      borderRadius: "12px",
                      minHeight: "212px",
                      width: "155px",
                    }}
                  >
                    <div className="app-card__img">
                      {" "}
                      <img src="https://th.bing.com/th/id/R.286475e70f00e1c61a3216ef1975725a?rik=otyXrZwKuIJBPw&pid=ImgRaw&r=0" />
                    </div>
                    <div className="app-card__subtext">{Prod.name}</div>

                    <form
                      onSubmit={(event) => event.preventDefault()}
                      /* action={updateSetup} */ style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: "1",
                      }}
                    >
                      <div
                        className="app-card-buttons d-flex justify-content-between"
                        style={{ width: "-webkit-fill-available" }}
                      >
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
          </div>

          {/* 
  <div className="apps-card" style={{ overflow: "auto", marginTop: "20px", alignItems:"flex-start" }} >
  
  </div> */}
        </div>
      </div>
    </>
  );
}
