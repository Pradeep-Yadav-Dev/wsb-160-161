import React from 'react'
import Header from './Commoncomponets/Header'
import Footer from './Commoncomponets/Footer'

export default function Checkout() {
  return (
    <div>
      <Header/>
      <div className="body w-[100%] flex">
        <div className="image w-[50%]  ">
          <img src="src\assets\Chips\116824a.jpg" alt="" />
        </div>
        <div className="info w-[50%]">
          <p>
            Home / Chips & Crisps / Kurkure Chilli Chatka Crisps <br />
Kurkure Chilli Chatka Crisps<br />

29 MINS
View all by Kurkure<br />
Select Unit
<br />
68 g<br />

MRP ₹20<br />
3 x 68 g<br />

₹54 MRP ₹60<br />
10% OFF<br />
(Inclusive of all taxes)
ADD<br />
Why shop from blinkit?<br />
express delivery<br />
Superfast Delivery<br />
Get your order delivered to your doorstep at the earliest from dark stores near you.<br />
best price<br />
Best Prices & Offers<br />
Best price destination with offers directly from the manufacturers.<br />
genuine products<br />
Wide Assortment<br />
Choose from 5000+ products across food, personal care, household & other categories.<br />
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
