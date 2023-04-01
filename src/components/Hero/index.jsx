import React from "react"
import style from "./style.module.css"

const Hero = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.divLeft}>
                    <p className={style.fontHeader}>Jadi expert bersama edspert.id</p>
                    <br />
                    <p className={style.fontContent}>Tingkatkan skill dan pengetahuan bersama para mentor <br /> terbaik di bidangnya, untuk siapkan karir impian anda.</p>
                </div>
                <div className={style.divRight}>
                    <img className={style.imgSubtractLeft} src={require('../../assets/Subtract1.png')} alt="img-sl" />
                    <img className={style.imgSubtractRight} src={require('../../assets/Subtract2.png')} alt="img-sr" />
                    <img className={style.stackImageHero} src={require('../../assets/image7.png')} alt="img-hero" />
                </div>
            </div>
        </>    
    );
}

export default Hero