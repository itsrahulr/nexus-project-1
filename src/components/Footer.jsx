const Footer = () => {
  return (
    <>
      {/* That yellow line  */}
      <div className="w-full p-2 flex justify-center items-center bg-yellow font-aeonic text-xl mt-10 text-center">
        <p className="hidden sm:block">
          Empowering Small Businesses with Nexus Info: Elevate Your Online
          Presence, Unleash Your Potential
        </p>
        <p className="block sm:hidden">Elevate your online presence</p>
      </div>
      {/* Some message and social links */}
      <div className="text-primary font-aeonic text-xl flex flex-col space-y-10 md:flex-row md:space-y-0 md:flex md:justify-between  p-3 mt-10">
        {/* Left div [some message] */}
        <div>Designed and Coded with ❤️‍🔥 by Rahul</div>
        {/* Right [social links] */}
        <div className="flex space-x-8">
          <div>Follow us</div>
          <div>
            <ul>
              <li className="hover:underline">
                <a href="">Linkedin</a>
              </li>
              <li className="hover:underline">
                <a href="">Instagram</a>
              </li>
              <li className="hover:underline">
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
