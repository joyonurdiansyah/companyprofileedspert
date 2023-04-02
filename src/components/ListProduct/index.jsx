import React from "react";
import style from "./style.module.css";
import convertToRupiah from "../../utils/formatToRupiah";
import product from "./product";
import Pagination from "./Pagination";

const ListProduct = () => {
  return (
    <>
      <div className="background-color-content">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-5">
          {product.map((element, index) => {
            return (
              <div
                key={element.id}
                className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className={style.wrapper}>
                  <div className={style.divLeft}>
                    <img
                      className={style.imgContent}
                      src={require("../../assets/vector.png")}
                      alt="img-content"
                    />
                  </div>
                  <div className={style.divRight}>
                    <p className={style.fontBootcampType}>{element.type}</p>
                    <p className={style.fontTitle}>{element.title}</p>
                    <p className={style.fontDetailTitle}>
                      ({element.detailTitle})
                    </p>
                  </div>
                </div>
                <div className="px-6 py-2">
                  <p className={style.fontTitleDesc}>{element.title}</p>
                  <p className={style.fontDetailTitleDesc}>
                    {element.detailTitle}
                  </p>
                  <div className={style.wrapperText}>
                    <div className={style.divLeftText}>
                      <span className={style.fontTitleText}>Batch</span>
                    </div>
                    <div className={style.divRightText}>
                      <span className={style.fontContentText}>
                        {element.batch}
                      </span>
                    </div>
                  </div>
                  <div className={style.wrapperText}>
                    <div className={style.divLeftText}>
                      <span className={style.fontTitleText}>Mentor</span>
                    </div>
                    <div className={style.divRightText}>
                      <span className={style.fontContentText}>
                        {element.mentor}
                      </span>
                    </div>
                  </div>
                  <p className={style.fontPrice}>
                    {convertToRupiah(element.price + "", "Rp")}
                  </p>
                  <p className={style.fontDiscountPrice}>
                    {convertToRupiah(element.discountPrice + "", "Rp")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default ListProduct;
