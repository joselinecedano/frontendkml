import React,{useEffect} from 'react'

//import AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

const BeforeAndAfter = () => {
    //initialize AOS animation
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='min-h-screen' >
        <h1 className='font-oldlondon text-6xl text-center'> Guidelines </h1> <br/>
        <div className="flex flex-wrap justify-center " >
          <div className="w-full sm:w-1/2 p-4" data-aos="fade-down-right">
            <div className="text-center border rounded-xl border-x-amber-950 p-2 h-">
              <h1 className="font-oldlondon text-2xl "> Policies </h1>
              <p>
                § Our regular hours are from 8am - 5pm. Any appointments booked
                outside of our scheduled hours will be considered a sqeeze in
                appointment, which comes with a fee of $15.
                <br />§ We have a 10 minute grace period! Anything after is a{" "}
                <span className="underline text-red-500">cancellation</span>.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-4" >
            <div className="text-center border rounded-xl border-x-amber-950 p-2" data-aos="fade-down-left">
              <h1 className="font-oldlondon text-2xl"> Deposits </h1>
              <p>
                § A non-refundable $25 deposit is required to book appointment.
                <br />
                § A $1 electronic fee is included. § $25 deposits are deducted
                off the final price. <br /> § Deposits can be transferred when
                rescheduling appointments if a 24hr notice has been given.{" "}
                <br /> § Appointments are not booked until a deposit and
                confirmation email has been received.
              </p>
            </div>
          </div>
        </div><br/>
        
        <div className="border rounded-xl border-x-amber-950" data-aos="fade-down-right">
          <div className="vw-full sm:w-full p-4">
            <h1 className="font-oldlondon text-center text-2xl">
              Before Appointment
            </h1>
            <p className='text-center'>
              § Please make sure you're on time for appointments, due to
              COVID-19 we can no longer provide a waiting area. therefore,
              arriving early will mean you have to wait outside. <br />§ NO PLUS
              ONES - only clients having the treatment are permitted inside to
              follow safety measures, as per COVID-19.
              <br /> § If you and a friend, family, coworker ETC. booked an
              appointment to come back to back only the person getting lashed at
              the moment can be serviced. The other will have to wait in the
              car, we do not have a waiting area. <br />§ Please make sure you
              come to your appointment with clean lashes and no makeup
              (especially your eye area). Arriving with makeup may require a lash
              bath leaving less time for your lashes to be filled. <br />§ If
              you haven't already added a LASH REMOVAL when booking then I may
              not be able to provide one at your appointment. <br />§ Being 10
              minutes late will be a $10 late fee & 15 minutes late will
              unfortunately mean your appointment is cancelled.
              <br />§ The remainder of your service is to be paid thru
              zelle/cashapp/apple pay. <br />§ When you arrive please dm us or
              text that your here so we can know when to let you in, sometimes
              we aren't done till the very last minute
              <br />§ ALL FULL SETS CAN TAKE 1HOUR 30MIN - 2 HOURS!
            </p>
          </div>
        </div>
<br/>
        <div className="border rounded-xl border-x-amber-950" data-aos="fade-down-left">
          <div className="vw-full sm:w-full p-4">
            <h1 className="font-oldlondon text-center text-2xl">
              After Appointment
            </h1>
            <p className='text-center'>
              § Please make sure you're on time for appointments, due to
              COVID-19 we can no longer provide a waiting area. therefore,
              arriving early will mean you have to wait outside. <br />§ NO PLUS
              ONES - only clients having the treatment are permitted inside to
              follow safety measures, as per COVID-19.
              <br /> § If you and a friend, family, coworker ETC. booked an
              appointment to come back to back only the person getting lashed at
              the moment can be serviced. The other will have to wait in the
              car, we do not have a waiting area. <br />§ Please make sure you
              come to your appointment with clean lashes and no makeup
              (especially your eye area). Arriving with makeup may require a lash
              bath leaving less time for your lashes to be filled. <br />§ If
              you haven't already added a LASH REMOVAL when booking then I may
              not be able to provide one at your appointment. <br />§ Being 10
              minutes late will be a $10 late fee & 15 minutes late will
              unfortunately mean your appointment is cancelled.
              <br />§ The remainder of your service is to be paid thru
              zelle/cashapp/apple pay. <br />§ When you arrive please dm us or
              text that your here so we can know when to let you in, sometimes
              we aren't done till the very last minute
              <br />§ ALL FULL SETS CAN TAKE 1 HOUR 30 MIN - 2 HOURS!
            </p>
          </div>
        </div>
    </div>
  )
}

export default BeforeAndAfter