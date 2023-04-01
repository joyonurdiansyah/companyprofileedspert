import React from "react";
import style from "./style.module.css";

const CompanyDetail = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.divLeft}>
          <p className={style.fontText}>TAGLINE edspert disini</p>
          <p className={style.fontDesc}>
            Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. <br /> Ngaglik, Kabupaten
            Sleman, Daerah Istimewa <br /> Yogyakarta 55581
          </p>
        </div>
        <div className={style.divRight}>
          <img
            className={style.imgEllipse1}
            src={require("../../assets/Ellipse.png")}
            alt="img-sl"
          />
          <div className={style.wrapper}>
            <div className={style.div1}>
              <p className={style.fontTitle}>Program</p>
              <p className={style.fontText}>Online Course</p>
              <p className={style.fontText}>Mini bootcamp</p>
              <p className={style.fontText}>Bootcamp</p>
            </div>
            <div className={style.div2}>
              <p className={style.fontTitle}>Bidang ilmu</p>
              <p className={style.fontText}>Digital marketing</p>
              <p className={style.fontText}>Product management</p>
              <p className={style.fontText}>English</p>
              <p className={style.fontText}>Programming</p>
            </div>
            <div className={style.div3}>
              <p className={style.fontTitle}>Tentang edspert</p>
              <p className={style.fontText}>Bantuan</p>
              <p className={style.fontText}>Kontak kami</p>
              <p className={style.fontText}>Media sosial</p>
            </div>
          </div>
          <p className={style.fontCopyright}>
            Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyDetail;
