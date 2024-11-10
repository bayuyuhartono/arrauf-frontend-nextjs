"use client"

import Link from "next/link";
import Card from "./component/Card";
import CardTestimoni from "./component/CardTestimoni";
import { useEffect, useState } from "react";
import { Arrauf } from "./types/arrauf";
import axios from "axios";
import CardBenefit from "./component/CardBenefit";
import CardMotto from "./component/CardMotto";
import { RiFlowerFill } from "react-icons/ri";
import CardEkstrakulikuler from "./component/CardEkstrakulikuler";

export default function Home() {
  const[data, setData] = useState<Arrauf>();
  const baseURL = 'https://api.ar-rauf.org'
  const adminBaseURL = 'https://admin.ar-rauf.org/'

  const getData = async() => {
    await axios
    .get(`${baseURL}/cms/home`)
    .then(Response => {setData(Response.data)})
  }

  useEffect(() => {
    getData()
  },[])

  function newWindow() {
    window.open(data?.data.ppdb.link)
    console.log(newWindow);
}

  return (
    <div className="w-full h-full">
      <div className="flex flex-row">
        <div className="w-[40%] h-[610px] ml-36">
          <h1 className="text-blue-tua font-serif font-bold text-5xl text-left mt-8">
            {data?.data.quote.quote_sub} <span className="text-green">Membangun Generasi Cerdas & Berakhlak Mulia Sesuai Sunnah</span>
          </h1>
          <h3 className="text-lg font-serif font-medium mt-7 ">
            {data?.data.quote.quote}
          </h3>
          <div className="flex flex-col gap-5 text-center mt-10">
            <Link 
            href="/daftar"
            className="w-full h-14 bg-green text-white font-serif text-xl py-3 rounded-md hover:bg-greentua">Daftar Sekarang</Link>
            <Link 
            href={""}
            className="w-full h-14 bg-green-muda font-serif text-xl py-3 rounded-md hover:bg-green-tua"
            >Kontak Kami</Link>
          </div>
        </div>
        <div className="w-[60%] h-[610px]">
          <img 
            src="LOGO-SEKOLAH-AR-RAUF.png" 
            alt="Logo Sekolah"
            className="w-[500px] h-[400px] items-center ml-36" />
          </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center bg-gray-100 h-[400px]">
        <h3 className="text-4xl font-bold font-serif text-green py-5">Ayah & Bunda Ingin Kemana ?</h3>
        <h1 className="text-lg font-serif italic ">{data?.data.quote.quote_sub}</h1>
        <div className="flex flex-row gap-3 font-serif text-lg pt-8 pb-3"> 
          <Link 
          href="/tk"
          className="bg-green w-28 rounded-md h-14 text-white text-center py-3 hover:bg-greentua"
          >TK</Link>
          <Link 
          href="/sd"
          className="bg-green w-28 rounded-md h-14 text-white text-center py-3 hover:bg-greentua"
          >SD</Link>
        </div>
      </div>
      <div className="flex flex-row gap-3 my-10 w-full justify-center items-center">
      {data?.data.benefit.map((item, index) => {
            return (
              <CardBenefit key={index} data={item}/>
            )
          })}
      </div>
      <div className="flex flex-col w-full text-center text-blue-tua font-serif text-base">
        <h3 className="text-blue-tua font-bold my-6">MOTTO</h3>
        <h3 className="text-blue-tua text-4xl mb-8">{data?.data.quote.quote_sub}</h3>
        {data?.data.motto.map((item, index) => {
            return (
              <CardMotto key={index} data={item}/>
            )
          })}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center font-serif text-4xl text-blue-tua my-8">Kegiatan Sekolah</h3>
        <div className="grid grid-cols-3 w-[60%] gap-8">
        {data?.data.schoolactivity.map((item, index) => {
            return (
              <Card key={index} data={item}/>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center font-serif text-4xl text-blue-tua my-8">Ekstrakulikuler</h3>
        <div className="grid grid-cols-3 w-[60%] gap-8">
        {data?.data.ekstrakulikuler.map((item, index) => {
            return (
              <CardEkstrakulikuler key={index} data={item}/>
            )
          })}
        </div>
      </div>
      <div className={`bg-[url('${adminBaseURL + data?.data.wallpaper.wallpaper_image}')] flex flex-col w-full h-72 justify-center items-center font-serif text-blue-tua my-10`}>
        <h3 className="text-4xl my-3 ">
          Daftarkan Putra & Putri Anda Segera
          {data?.data?.wallpaper?.wallpaper_text}
        </h3>
        <h3>
        “Mencetak generasi yang cerdas, berkualitas dan berakhlak mulia sesuai pemahaman Salaf As-Shalih.”
        </h3>
        <button 
            onClick={newWindow}
            className="w-56 h-14 my-8 bg-green text-white font-serif text-center text-xl py-3 rounded-md hover:bg-greentua"
            >Daftar Sekarang
        </button>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <h3 className="text-center font-serif text-5xl text-greentua font-bold my-8">Testimoni tentang Sekolah Kami </h3>
        <RiFlowerFill className="w-20 h-14"color="#2cb1bc" />
        <div className="grid grid-cols-2 w-[60%] gap-8">
          {data?.data.testimoni.map((item, index) => {
            return (
              <CardTestimoni key={index} Data={item}/>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-36">
        <h3 className="text-center font-serif text-4xl text-greentua font-bold my-8">{data?.data.quote.quote}</h3>
        <p className="text-lg font-serif italic ">{data?.data.quote.quote_sub}</p>
        <Link 
            href="/daftar"
            className="w-56 h-14 my-8 bg-green text-white font-serif text-center text-xl py-3 rounded-md hover:bg-greentua">Daftar Sekarang</Link>
      </div>
    </div>
  );
}
