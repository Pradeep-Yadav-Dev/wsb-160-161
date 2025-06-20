import React, { useState } from 'react'
import './App.css'
import { FaPlus } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx';

function App() {

  let faqData = [
    {
      id: 1,
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer: "Netflix offers several plans to fit your needs. Prices vary by region and plan, starting with a basic plan for standard definition, a standard plan for HD, and a premium plan for Ultra HD. Check the Netflix website for the latest pricing in your country."
    },
    {
      id: 3,
      question: "How do I sign up for Netflix?",
      answer: "You can sign up for Netflix directly on the website or through the Netflix app. Simply provide your email, create a password, choose a plan, and enter your payment details. You’ll be ready to stream in minutes!"
    },
    {
      id: 4,
      question: "What can I watch on Netflix?",
      answer: "Netflix has a vast library including original series, blockbuster movies, documentaries, kids’ shows, and international content. From critically acclaimed dramas to lighthearted comedies, there’s something for everyone."
    },
    {
      id: 5,
      question: "Can I watch Netflix offline?",
      answer: "Yes! Many Netflix titles can be downloaded on the Netflix app for offline viewing on mobile devices or tablets. Look for the download icon next to eligible movies and episodes."
    },
    {
      id: 6,
      question: "How many devices can stream Netflix at once?",
      answer: "The number of simultaneous streams depends on your plan. The Basic plan allows 1 stream, the Standard plan allows 2, and the Premium plan allows up to 4 streams at the same time."
    },
    {
      id: 7,
      question: "Is Netflix ad-free?",
      answer: "Yes, Netflix is completely ad-free across all plans, so you can enjoy uninterrupted streaming of your favorite shows and movies."
    },
    {
      id: 8,
      question: "Can I share my Netflix account?",
      answer: "Netflix allows multiple profiles within one account, so household members can have personalized recommendations. Sharing outside your household may be subject to additional terms depending on your region."
    },
    {
      id: 9,
      question: "What devices support Netflix?",
      answer: "Netflix is available on smart TVs, phones, tablets, computers, streaming media players, and game consoles. Visit the Netflix Help Center for a full list of compatible devices."
    },
    {
      id: 10,
      question: "How do I cancel my Netflix subscription?",
      answer: "You can cancel your Netflix subscription anytime through your account settings on the Netflix website. There are no cancellation fees, and you can restart your membership whenever you like."
    }
  ];

  const [faqState,setFaqState]=useState(1)

  console.log(faqState)


  let handelFaq=(myId)=>{

    if(myId==faqState){
      setFaqState(null)
    }
    else{
       setFaqState(myId)
    }


  }

 

  return (
    <>
      <div className="max-w-[1400px] mx-auto  mt-[50px] ">
        <h1 className='text-white text-[22px] font-bold '>Frequently Asked Questions</h1>

        <div className="allFaq mt-[20px] ">

          {faqData.map((v) =>(

          

              <div className="row text-white my-[10px] ">

                <h1 onClick={()=>handelFaq(v.id )} className=' relative bg-[#414141] p-[10px] font-bold border-b border-bottom-[white] ' > {v.id}  {v.question} <span className='absolute right-[10px] top-[12px] ' > {faqState==v.id ? <RxCross1 /> : <FaPlus />} </span> </h1>
                  
                <p className={`bg-[#414141] p-[15px]  ${faqState==v.id ? "block" : "hidden"}  `}>
                  {v.answer}
                </p>

              </div>

          ) )}









        </div>
      </div>
    </>
  )
}

export default App
