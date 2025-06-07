import Logo from "../images/brandLogo.png";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white md:flex items-center justify-center pb-20 mt-40">

        <img src={Logo} alt="" className="sepia invert w-1/2 md:w-1/4 " />

        <ul className="ml-4 text-lg  ">
          <li className="mb-2">
            <a href=""><i class="fa-brands fa-instagram mr-3"></i> Instagram</a>
          </li>
          <li>
            <i class="fa-solid fa-phone mr-3"></i> +91 9888848828
          </li>
        </ul>

      </div>
    </>
  );
};

export default Footer;
