import { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [products] = useState([
    { id: 1, image: "Images/product1.jpg", name: "Ibanez IJRX20BKN", price: 3880000 },
    { id: 2, image: "Images/product2.jpg", name: "Ibanez IJRX20BL", price: 3780000 },
    { id: 3, image: "Images/product3.jpg", name: "Paket Alat Band Pro", price: 3680000 },
    { id: 4, image: "Images/product4.jpg", name: "Les Paul SL Ebony", price: 3580000 },
    { id: 5, image: "Images/product5.jpg", name: "Les Paul Standard 60s", price: 3480000 },
    { id: 6, image: "Images/product6.jpg", name: "Gitar Kramer Focus ", price: 3380000 },
    { id: 7, image: "Images/product7.jpg", name: "Ruby Red Electric Guitar", price: 3280000 },
    { id: 8, image: "Images/product8.jpg", name: "Teal Electric Guitar", price: 3180000 },
    { id: 9, image: "Images/product9.jpg", name: "Gitar Squier E.G, Maple FB", price: 3080000 },
    { id: 10, image: "Images/product10.jpg", name: "Gitar Squier Laurel FB", price: 3810000 },
    { id: 11, image: "Images/product11.jpg", name: "Squier Bullet Tremolo", price: 3820000 },
    { id: 12, image: "Images/product12.jpg", name: "Roland FP 30X", price: 3880000 },
  ]);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }

    const newTotalPrice = totalPrice + product.price;
    setTotalPrice(newTotalPrice);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((product) => product.id !== item.id);
    setCart(updatedCart);

    const reducedPrice = item.price * item.quantity;
    const newTotalPrice = totalPrice - reducedPrice;
    setTotalPrice(newTotalPrice);
  };

  const handleIncreaseQuantity = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);

    const newTotalPrice = totalPrice + item.price;
    setTotalPrice(newTotalPrice);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setCart(updatedCart);

      const reducedPrice = item.price;
      const newTotalPrice = totalPrice - reducedPrice;
      setTotalPrice(newTotalPrice);
    } else if (item.quantity === 1) {
      const updatedCart = cart.filter((product) => product.id !== item.id);
      setCart(updatedCart);

      const reducedPrice = item.price * item.quantity;
      const newTotalPrice = totalPrice - reducedPrice;
      setTotalPrice(newTotalPrice);
    }
  };

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="bg-[#F4F4F4] pt-20">
        <div className=" container m-auto flex h-screen overflow-hidden ">
          <div className="left w-[70%] h-full ">
            <div className="head mb-[20px]">
              <div className="text-[33px] font-semibold">
                Daftar Produk Alat Alat Band
              </div>
            </div>
            <div className="card  flex px-2 flex-wrap gap-3 overflow-y-auto h-full pb-[120px]">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card bg-white w-[200px] h-[238px] flex flex-col justify-center px-2 rounded shadow-xl pt-1 pb-3"
                >
                  <div className="img h-[130px] bg-slate-300 m-auto overflow-hidden rounded">
                    <img
                      className="h-full object-cover"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className="teks">
                    <div className="title text-[14px] font-bold">
                      {product.name}
                    </div>
                    <div className="price text-[11px] font-semibold text-primary">
                      Rp. {product.price}
                    </div>
                  </div>
                  <div className="btn flex justify-start mt-2 w-full">
                    <button
                      className="w-full btn text-[11px] text-white rounded p-2  bg-[#5E42CE] hover:bg-[#937af9] focus:ring-4 focus:ring-[#937af9] "
                      onClick={() => handleAddToCart(product)}>
                      Tambah Produk
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* keranjang */}
          <div className="right w-[30%] px-3 flex items-center justify-center ">
            <div className="keranjang produk bg-white h-[95%] w-full rounded-lg p-2 py-3 flex flex-col justify-between shadow-lg">
              <div className="produk  h-[85%]">
                <div className="head ">
                  <h2 className="text-[18px] font-bold mb-4">Order Summary</h2>
                  <div className="total-items-in-cart flex justify-between mb-4">
                    <p>Total Items in Cart:</p>
                    <p>{totalItemsInCart}</p>
                  </div>
                </div>
                <div className="wrapcard  h-[77%] overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className=" flex items-center justify-between mb-2"
                    >
                      <div className="left flex gap-3 items-center">
                        <div
                          onClick={() => handleRemoveFromCart(item)}
                          className="del cursor-pointer"
                        >
                          <img src="Images/delete.png" alt="" />
                        </div>
                        <div className="tels">
                          <div className="text-[12px] font-bold">{item.name}</div>
                          <div className="text-[10px] font-medium">
                            Rp. {item.price}
                          </div>
                        </div>
                      </div>
                      <div className="right flex gap-3 w-[160px]  justify-between ">
                        <div className="counter flex gap-2 items-center w-[70px] justify-between h-full">
                          <button
                            className="p-1 rounded-sm px-2 bg-primary inline-block text-white"
                            onClick={() => handleDecreaseQuantity(item)}
                          >
                            -
                          </button>
                          <div className="text-[14px]">{item.quantity}</div>
                          <button
                            onClick={() => handleIncreaseQuantity(item)}
                            className="p-1 rounded-sm px-2 bg-primary inline-block text-white"
                          >
                            +
                          </button>
                        </div>
                        <button className="text-[12px] font-bold">
                          Rp. {item.price * item.quantity}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bottom ">
                <div className="text-[18px] font-semibold flex justify-between mb-4">
                  <h3 >Total Price: </h3>
                  <h3>Rp.{totalPrice}</h3>
                </div>
                <button onClick='/src/pages/formLogin.jsx' className="bg-[#5E42CE] hover:bg-[#937af9] focus:ring-4 focus:ring-[#937af9] text-white w-full p-2 ">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
