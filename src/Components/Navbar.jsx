

function Navbar() {
  return (
    <div className=" bg-[#5E42CE] fixed w-full p-2">
      <div className="header container m-auto  flex justify-between h-13 items-cente">
        <div className="left text-srWhite font-bold text-[18px] items-center justify-center flex">Band Store</div>
        <div className="right text-[17px] flex gap-5 rounded-lg p-1">
          <a href="/product/productPage" className="text-srWhite bg-[#3d2c83] hover:bg-[#937af9] focus:ring-4 focus:ring-[#937af9] px-2 py-2 rounded">Admin</a>
          <a href="/FormLogin" className="text-srWhite bg-[#3d2c83] hover:bg-[#937af9] focus:ring-4 focus:ring-[#937af9] px-2 py-2 rounded">Login</a>
          <a href="/FormLogin" className="text-srWhite bg-[#D80027] hover:bg-[#ef8a9c] px-2 py-2 rounded">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
