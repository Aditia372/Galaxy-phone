import React from "react";
import Produk4 from "../assets/xiaomi.png";
import Produk5 from "../assets/iphone.png";
import Produk6 from "../assets/vivo.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="py-10 px-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Xiaomi</p>
                <button>
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
            <img src={Produk4} alt="" className="w-[240px] absolute top-19 left-20" />
          </div>
          <div className="py-10 px-5 bg-gradient-to-br from-yellow-400/90 to-yellow-400/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2 text-red-600">Apple</p>
                <button>
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
            <img src={Produk5} alt="" className="w-[180px] absolute top-4 right-0" />
          </div>
          <div className="col-span-2 py-10 px-5 bg-gradient-to-br from-red-800 to-red-800 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Vivo Phone</p>
                <button>
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
            <img src={Produk6} alt="" className="w-[260px] absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
