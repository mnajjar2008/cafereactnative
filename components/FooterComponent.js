import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm text-sm-left">
                        <h5>Address</h5>
                        <address>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            1141 Ringwood Ct <br />
                            San Jose, CA 95131
                        </address>
                    </div>
                    <div className="col-sm mb-3">
                        <h5>Connect</h5>
                        <a className="btn btn-dark" href="http://facebook.com/">
                            <i className="fa fa-facebook" />
                        </a>{' '}
                        <a className="btn btn-dark" href="http://twitter.com/">
                            <i className="fa fa-twitter" />
                        </a>{' '}
                        <a className="btn btn-dark" href="http://instagram.com/">
                            <i className="fa fa-instagram" />
                        </a>
                    </div>
                    <div className="col-sm-12 col-lg text-sm-center">
                        <ul className="list-unstyled">
                            <li>
                                <a role="button" className="btn btn-sm" href="tel:206-555-1234">
                                    {' '}
                                    <i className="fa fa-phone-square" i />{' '}
                                </a>
                                Call: 206-555-1234
                            </li>
                            <li>
                                <a role="button" className="btn btn-sm" href="email:sanjosecafe@gmail.com">
                                    <i className="fa fa-envelope" i />
                                </a>{' '}
                                Email: sanjosecafe@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
