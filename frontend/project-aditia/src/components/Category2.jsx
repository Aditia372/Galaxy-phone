import React from "react";
import Produk7 from "../assets/samsung.png";
import Produk9 from "../assets/oppo.png";
import Produk8 from "../assets/infinix.png";

const Category2 = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-2 py-10 px-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Samsung</p>
                <button>
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
            <img src={Produk7} alt="" className="w-[360px] absolute top-2 left-60" />
          </div>
          <div className="py-10 px-5 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Infinix</p>
                <button>
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
            <img src={Produk8} alt="" className="w-[230px] absolute top-0 left-20" />
          </div>
          <div className="py-10 px-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Oppo</p>
                <button>
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
            <img src={Produk9} alt="" className="w-[150px] absolute top-6 left-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
