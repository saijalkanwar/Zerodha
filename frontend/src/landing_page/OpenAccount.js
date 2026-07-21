import React from 'react';
function OpenAccount(){
    return(
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
        <img src='media/homehero.png' alt="Hero" className='mb-5' />
        <h1 className="mt-5">Open a Zerodha Account</h1>
        <p>
          Modern platforms and apps, 0 investment advisory, and a transparent pricing model. Open an account in 10 minutes.
        </p>
        <button className='p-2 btn btn-primary fs-5' style={{width:"30%",margin:"0 auto"}}> Sign Up Now </button>
        </div>
        </div>
    );
}
export default OpenAccount;