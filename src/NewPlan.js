import React from 'react'
import Image from './images/image1.png'
import logo from './images/logo.png'

function NewPlan() {
    return (
        <div>
            <div className="row header">
                <img src={logo} className="logo-image img-responsive"/>
                <div className="plan-header">
                        Welcome to StackSave<spna className="subtitle">Innovative Digital Chit agent</spna>
                </div>  
            </div>
            <div className="plan-container">
                <div className="plan-content-header">
                        Chit funds available to Join
                </div>
                <div className="double-column">

                    <div className="Plan-Image-Div">
                        <img src={Image} className="plan-image"/>
                    </div>

                <div className="plan-content">
                    <div className="plan-content-div">
                        <div className="plan-content-item">
                            <div> Chit Value</div>
                            <div> 2 </div>
                            <div> Lakhs </div>
                        </div>
                        <div className="plan-content-item">
                            <div> Monthly Installement</div>
                            <div> 8000₹  </div>
                            <div> INR</div>
                        </div>
                        <div className="plan-content-item">
                            <div> Duration</div>
                            <div> 25 </div>
                            <div> Months </div>
                        </div>
                        <div className="plan-content-item">
                            <button className="outline">Join Now</button>
                        </div>
                    </div>
                    <div className="plan-content-div">
                        <div className="plan-content-item">
                            <div> Chit Value</div>
                            <div> 5 </div>
                            <div> Lakhs </div>
                        </div>
                        <div className="plan-content-item">
                            <div> Monthly Installement</div>
                            <div> 12500₹  </div>
                            <div> INR </div>
                        </div>
                        <div className="plan-content-item">
                            <div> Duration</div>
                            <div> 40 </div>
                            <div> Months </div>
                        </div>
                        <div className="plan-content-item">
                            <button className="outline">Join Now</button>
                        </div>
                    </div>
                    <div className="plan-content-div">
                        <div className="plan-content-item">
                            <div> Chit Value</div>
                            <div> 5 </div>
                            <div> Lakhs </div>
                        </div>
                        <div className="plan-content-item">
                            <div> Monthly Installement</div>
                            <div> 10000₹  </div>
                            <div>INR </div>
                        </div>
                        <div className="plan-content-item">
                            <div> Duration</div>
                            <div> 50 </div>
                            <div> Months </div>
                        </div>
                        <div className="plan-content-item">
                            <button className="outline">Join Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="plan-description">
                <div className="plan-description-left">
                    <span>
                        Chits funds are in operation in India since 1969 and the Chit funds are operated by registered  Chit companies and they are bound by law through the Chit Fund Act 2019.This ensures that your savings are protected.
                        Chit fund is very smart instrument and it is beneficial because of below reason
                        <span className="desc">
                            <span className="desc-point">i) A higher rate of return in comparison to a bank deposit.</span>
                            <span className="desc-point">ii) Easier borrowing and must cheaper and fast.</span>
                        </span>
                        </span>
                        <span>
                        The chit fund company(foreman) organizes a saving scheme and a group of people come together to pool-in an equal instalment of money every month. Here the Chit fund company should be a registered chit company and before starting the saving scheme, The chit fund company must apply for approval from the Chit registrar of the Local State Government
                        All the Chit companies in StackSave are Registered Chit fund companies and verified by StackSave.
                        Once the necessary approvals are given to Chit fund company, a group of people come together to join and pool-in equal installments of money every month.
                    </span>
                </div>
                <div className="border"></div>
                <div className="plan-description-right">
                    <span>You can choose the chit fund based on your need, through the StackSave mobile app</span>
                    <span>The auction is conducted through a open auction and the subscriber can bid upto a Maximun Bid of (40-45%) which means that the person is ready to foregoe  and the balance is paid as Prize Money to the person who wins the bid.</span>
                    <span>For example the Person bids 45% of the lot(1 lakh ruppes), then the Prize money is 55000</span>
                    <span>Out of  the remaining Rs 45,000,  5% commission is collected by Chit company and the remaining  40000 is equally distributed among 20 people, So  40000/20 = 2000 is the dividend earned by all the people in the group(including the Prize money winner)</span>
                    <span>And the next month the Subscriber must pay only Rs 3000(5000-2000) that is 1st Month installement minus the Dividend and Rs 2000/-  is the dividend earned</span>
                    <span>StackSave helps you find the right chit fund based on your needs and partners with Chit fund companies to give the best chit fund, We don’t host any chit fund </span>
                </div>
            </div>
        </div>
    )
}

export default NewPlan





// <div className="plan-description">

{/* <span>You can choose the chit fund based on your need, through the StackSave mobile app</span>
<span>
The auction is conducted through a open auction and the subscriber can bid upto a Maximun Bid of (40-45%) which means that the person is ready to foregoe  and the balance is paid as Prize Money to the person who wins the bid.
</span>
<span>
For example the Person bids 45% of the lot(1 lakh ruppes), then the Prize money is 55000
</span>

<span>
Out of  the remaining Rs 45,000,  5% commission is collected by Chit company and the remaining  40000 is equally distributed among 20 people, So  40000/20 = 2000 is the dividend earned by all the people in the group(including the Prize money winner)
</span>

<span>

And the next month the Subscriber must pay only Rs 3000(5000-2000) that is 1st Month installement minus the Dividend and Rs 2000/-  is the dividend earned
</span>

<span>
StackSave helps you find the right chit fund based on your needs and partners with Chit fund companies to give the best chit fund, We don’t host any chit fund 
</span> */}


// {/* <span>
//     Chits funds are in operation in India since 1969 and the Chit funds are operated by registered  Chit companies and they are bound by law through the Chit Fund Act 2019.This ensures that your savings are protected.
//     Chit fund is very smart instrument and it is beneficial because of below reason
//     <span className="desc">
//         <span className="desc-point">i) A higher rate of return in comparison to a bank deposit.</span>
//         <span className="desc-point">ii) Easier borrowing and must cheaper and fast.</span>
//     </span>
// </span>
// <span>
// The chit fund company(foreman) organizes a saving scheme and a group of people come together to pool-in an equal instalment of money every month. Here the Chit fund company should be a registered chit company and before starting the saving scheme, The chit fund company must apply for approval from the Chit registrar of the Local State Government
// All the Chit companies in StackSave are Registered Chit fund companies and verified by StackSave.
// Once the necessary approvals are given to Chit fund company, a group of people come together to join and pool-in equal installments of money every month.
// </span> 
// </div>