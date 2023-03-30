import React from "react"
import style from "./style.module.css"

const Hero = () => {
    return (
        <>
            <div className={style["wrapper"]}>
                <div className={style["div-left"]}>
                    <p className={style["font-header"]}>Jadi expert bersama edspert.id</p>
                    <br />
                    <p className={style["font-content"]}>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
                </div>
                <div className={style["div-right"]}>
                    <img className={style["img-subtract-left"]} src={require('../../assets/Subtract1.png')} alt="img-sl" />
                    <img className={style["img-subtract-right"]} src={require('../../assets/Subtract2.png')} alt="img-sr" />
                    <img className={style["stack-image-hero"]} src={require('../../assets/image7.png')} alt="img-hero" />
                </div>
            </div>
        </>    
    );
}

export default Hero