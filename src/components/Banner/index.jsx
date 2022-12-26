import React from 'react'
import banner from './banner.png'
import style from './Banner.module.scss'

export default function Banner() {
  return (
    <div className={style.banner}>
        <h1>O melhor dog da cidade!</h1>
        <img src={banner} alt="Banner da marca frida's dog" />
    </div>
  )
}