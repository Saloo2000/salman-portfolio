import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { TiArrowUp } from "react-icons/ti";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function Contact({contact}) {
  const [loading, setLoading] = useState(false)
  // const [searchParams, setSearchParams] = useSearchParams()
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    console.log("Form data submitted:", data);

    emailjs
    .sendForm(
      "service_s3ydocr", // Replace with your EmailJS Service ID
      "template_gwewuzx", // Replace with your EmailJS Template ID
      formRef.current,
      "fZXIZIzaRBqmGflR6" // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        setLoading(false)
        toast.success("Email Sent Successfully")
      },
      (error) => {
        setLoading(false)
        toast.error("Failed to Send Email")
      }
    );
  };


  // function handleParams() {
  //   // searchParams.set("workflow", 20)
  //   // setSearchParams(searchParams)
  //   return redirect("/works")
  // }

  return (
    <div
    ref={contact}
      data-scroll
      data-scroll-speed="-0.5"
      className="p-[2rem] md:pt-[80px] pt-[60px] md:rounded-t-[70px] rounded-t-[35px] relative z-50 bg-black pb-[150px] overflow-hidden flex md:flex-row  flex-col-reverse"
    >
      <div className="links w-full md:w-2/5 self-end pt-[16vw] text-[12px]">
        <div className="details md:text-[14px] md:flex md:gap-[20rem]">
          <div className="md:w-1/5 w-full text-zinc-600 font-manrope font-semibold">
            <h2>SOCIAL:</h2>
            <h2 className="text-white">SALMANGITHUB.COM</h2>
            <h2 className="text-white">SALMANFACEBOOK.COM</h2>
          </div>
          <div className="md:w-1/5 w-full py-[2rem] text-zinc-600 font-manrope font-semibold">
            <h2>WHATSAPP:</h2>
            <h2 className="text-white">+923 222 255 389</h2>
            <h2 className="text-white">+923 082 081 864</h2>
          </div>
        </div>
        <div className="details md:py-[12rem] md:text-[14px]">
          <div className="md:w-1/5 text-zinc-600 font-manrope font-semibold">
            <h2>EMAIL:</h2>
            <h2 className="text-white">SALMAN.SALOO2000@GMAIL.COM</h2>
            <h2 className="text-white">SALOOHASHMI20@GMAIL.COM</h2>
          </div>
        </div>
      </div>

      <div className="form md:3/5">
        <div>
          <h2 className="font-gallient md:text-[7vw] text-[18vw]">Let's Get In <br /> Touch</h2>
          <h2 className="md:text-[14px] text-[12px] mb-[25px] text-zinc-600">
            SOMETHING IN A MIND? <br />
            DROP A MAIL RIGHT NOW
          </h2>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[40px] text-[14px] md:pt-[10px]"
        >
          <input
            className="bg-transparent border-white border-b-[2px] md:px-2 md:py-4 text-white"
            placeholder="[FULLNAME]"
            type="text"
            name="name"
            {...register("name", { required: "This Field is Required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            className="bg-transparent border-white border-b-[2px] md:px-2 md:py-4 text-white"
            placeholder="[NUMBER]"
            type="number"
            name="number"
            {...register("number", { required: "This Field is Required" })}
          />
          {errors.number && <p className="text-red-500">{errors.number.message}</p>}

          <input
            className="bg-transparent border-white border-b-[2px] md:px-2 md:py-4 text-white"
            placeholder="[EMAIL]"
            type="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
  
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <textarea
            className="bg-transparent border-white border-b-[2px] md:px-2 md:py-4 text-white"
            placeholder="[MESSAGE]"
            name="message"
            {...register("message", { required: "This Field is Required" })}
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}

          <button
            className="bg-white rounded-[12px] flex items-center justify-center text-black text-[14px] w-full md:w-fit px-4 py-2 font-medium self-end"
            type="submit"
            // onClick={handleParams}
            disabled={loading}
          >
            {loading ? "SENDING" : "SEND MESSAGE"} <TiArrowUp size="2rem" className="rotate-45" />
          </button>
        </form>
      </div>

      <h2 className="pointer-events-none absolute bottom-[-24rem] left-[-50vw] text-[23vw] font-gallient opacity-30 -z-10">
        MERNNATRIX
      </h2>
    </div>
  );
}

export default Contact;
