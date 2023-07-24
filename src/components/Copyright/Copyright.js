import React from 'react'
import './Copyright.css'
import iconoMineris from '../../imagenes/logotipo-mineris.png'

const Copyright = () => {
    return (
        <section className='copyright-container'>
            <div className="container-colum-copy-1">
                <a href="https://www.mineris.com.ar/" target="_blank" rel="noreferrer">
                    <img className='logo-mineris' alt='Logo Mineris' src={iconoMineris}></img>
                </a>
            </div>
            <div className="container-colum-copy-2">
                <font>©Copyright 2023.</font>
                <font>All Rights Reserved Miners.</font>
                <font>Web: <a href='https://mineris.com.ar' target="_blank" rel="noreferrer">www.mineris.com.ar</a></font>
            </div>
        </section>
    )
}

export default Copyright