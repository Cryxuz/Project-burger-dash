function Contact() {
  return (
    <div className="bg-cover py-[5%] min-h-screen" style={{ backgroundImage: 'url("/images/table-setting.jpg")' }}>
      <div className="w-[90%] md:w-[50%] bg-slate-800 p-[10%] md:p-[3%] pb-[5%] mt-[20%] md:mt-[10%] xl:mt-[5%] mx-auto rounded-xl bg-opacity-80 " >
        <h2 className="text-white text-2xl md:text-3xl ">Contact Us</h2>
        <br />
        <p className="text-white">
          Give us a call on <span className="underline text-emerald-300">01 23 456 789</span> or fill out the form below.
        </p>
        <br />
        <form className="flex flex-col space-y-4" action="">
          <input
            className="px-4 py-2 rounded border"
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="px-4 py-2 rounded border"
            type="email"
            placeholder="Enter Email"
          />
          <input
            className="px-4 py-2 rounded border"
            type="tel"
            placeholder="Enter Phone Number"
          />
          <textarea
            className="px-4 py-2 rounded border"
            placeholder="Message"
          ></textarea>
          <button className="bg-slate-500 bg-opacity-70 hover:bg-slate-400 text-slate-50 rounded-xl py-3 px-5 mx-auto my-3">
            Submit
          </button>
        </form>
        <div className="xl:grid xl:grid-cols-3 items-center justify-center">
        <div className="location text-center">
          <p className="text-xl my-[5%] text-white">Location</p>
          <p className="text-gray-300">123 Fake Street, Queenstown, New Zealand</p>
        </div>
        <div className="social media text-center">
          <p className="text-xl my-[5%] text-white">Follow Us</p>
          <div className="flex items-center justify-center gap-2">
          <img src="/images/facebook.png" alt="" />
          <img src="/images/tripadvisor.png" alt="" />
          <img src="/images/instagram.png" alt="" />
          </div>
        </div>
        <div className="contact text-center">
          <p className="text-xl my-[5%] text-white">Contact</p>
          <p className="text-gray-300">Call 01 23 456 789</p>
          <p className="text-gray-300">FakeEmail@gmail.com</p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;