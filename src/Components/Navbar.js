import Logo from "../images/logo@2x.png";
function Navbar() {
  return (
    <div className="flex justify-around items-center py-5">
      <div className="log md:w-12 md:h-16">
        <img src={Logo} alt="logo" />;
      </div>
      <div className=" navtab text-white  w-2/4 px-12 ">
        <ul className="flex justify-between text-sm font-bold">
          <li className="">Home</li>
          <li className="">About Us</li>
          <li className="">Leaders</li>
          <li className="">NYSC Update</li>
          <li className="">Blog</li>
          <li className="">Contact</li>
        </ul>
      </div>
      <div className="button">
        <button
          class="green-bg text-white  uppercase text-sm px-6 py-4  font-bold rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Donate now
        </button>
      </div>
    </div>
  );
}

export default Navbar;
