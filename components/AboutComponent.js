import React from 'react';

function About() {
    return (
        <div className="container">
            <section className="row mt-4">
                <div className="col-12">
                    <h4 className="section-title p-2">Our Cafe</h4>
                    <p className="p-4">
                        San Jose Cafe's mission is to honor our guests' decision to dine with us by providing world-className service, great-tasting food to their order, in a clean comfortable environment. Since our humble beginnings over 6 years ago in
                        San Jose, California, we have been proud to serve our coffee, waffles, and pastries the way they're supposed to be — fresh, natural, and cooked to order.
                    </p>
                </div>
            </section>
            <section className="row mt-4">
                <div className="col-12">
                    <h4 className="section-title p-2">Location & Hours</h4>
                </div>
                <div className="col-6 text-center p-4">
                    <hr />
                    Monday Closed
                    <hr />
                    Tuesday 7:00 am - 3:00 pm
                    <hr />
                    Wednesday 7:00 am - 3:00 pm
                    <hr />
                    Thursday 7:00 am - 3:00 pm
                    <hr />
                    Friday 7:00 am - 3:00 pm
                    <hr />
                    Saturday 7:00 am - 3:00 pm
                    <hr />
                    Sunday 8:00 am - 3:00 pm
                    <hr />
                </div>
                <div className="col-6 p-4 align-self-center text-center">
                    <h5 className="p-2">Address</h5>
                    <address>
                        1141 Ringwood Ct <br />
                        San Jose, CA 95131
                    </address>
                </div>
            </section>

            <section className="row mt-4">
                <div className="col-12">
                    <h4 className="section-title p-2">Email US</h4>
                    <form className="pt-4">
                        <div className="form-group row">
                            <label htmlFor="Name" className="col-md-3 col-form-label">
                                Name
                            </label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" id="Name" name="Name" placeholder="Name" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="areaCode" className="col-md-3 col-form-label">
                                Phone Number
                            </label>
                            <div className="col-7 col-md-5">
                                <input type="tel" className="form-control" id="areaCode" name="areaCode" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-md-3 col-form-label">
                                Email
                            </label>
                            <div className="col-md-9">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="message" className="col-md-3 col-form-label">
                                Message
                            </label>
                            <div className="col-md-9">
                                <textarea className="form-control" id="message" name="feedback" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-3 col-md-10">
                                <button type="submit" className="btn btn-md btn-dark">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default About;
