import React from "react";
import { useSelector } from "react-redux";
import Boughtbackticket from "../child/BoughtbackTicket ";
import Boughtgoticket from "../child/BoughtgoTicket";
import Identification from "../child/Identification";
const DomesticFlightPassengersPage = () => {
    // const buyBackTicket = useSelector(state => state.buyBackTicket);

    return (
        <>
            <div className="container">

                <div className="row ">
                    <div className="col-xl-6 col-lg-12 " >
                        <div className=" rounded-3 border  mt-4 shadow-sm "
                            style={{ height: "170px" }}>
                            <Boughtgoticket />
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-12 " >
                        <div className=" rounded-3 border  mt-4 shadow-sm "
                            style={{ height: "170px" }}>
                            <Boughtbackticket />
                        </div>
                    </div>

                </div>

                <div className="container ">
                    <Identification />
                </div>

                <div className="container border rounded-3 fs-5" >
                    <div className="row m-3">
                        <input class="form-check-input col-sm-3 col-1 mt-2"
                            type="checkbox" />
                        <div className="col-sm-8 col-11 mt-2 "
                            style={{ height: "50px", fontFamily: "iranYekan" }}>
                            ارسال بلیط به ایمیل و شماره همراه دیگر
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <form className="row ps-5 pt-4 pb-5 border fs-5 "
                    style={{ fontFamily: "iranYekan" }}>
                    <div className="col-xl-7 col-12 mt-3 mb-5" >
                        با کلیک روی تایید و ادامه خرید با
                        <a href="gdf">
                            قوانین سایت و قوانین پرواز
                        </a>
                        موافقت کرده اید.
                    </div>
                    <div className="col-xl-2 mt-4 fs-4 col-sm-6 text-center mb-3" >
                        120000ریال
                    </div>
                    <button type="submit" className="col-xl-2 btn btn-primary fs-5 mt-2 col-lg-3 col-sm-4 mb-1">
                        تایید و ادامه خرید
                    </button>
                </form>
            </div>
        </>
    )
}
export default DomesticFlightPassengersPage;