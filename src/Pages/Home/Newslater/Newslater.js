import React from 'react';

const Newslater = () => {
    return (
            <div class="newsletter-area pt-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="newsletter-wrapper">
                                <h2>Subscribe Our Newsletter For Latest Update</h2>
                                <form>
                                    <div class="input-group newsletter-input">
                                        <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                                Subscribe</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Newslater;