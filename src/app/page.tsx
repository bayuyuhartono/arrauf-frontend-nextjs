"use client"

import Link from "next/link";
import { IoIosWater } from "react-icons/io";
import Card from "./component/Card";
import CardTestimoni from "./component/CardTestimoni";
import Kurikulum from "./Kurikulum/page";
import { useEffect, useState } from "react";
import { Arrauf } from "./types/arrauf";
import axios from "axios";

export default function Home() {
  const[data, setData] = useState<Arrauf>();
  const baseURL = 'https://api.ar-rauf.org'

  const getData = async() => {
    await axios
    .get(`${baseURL}/cms/home`)
    .then(Response => {setData(Response.data)})
  }

  useEffect(() => {
    getData()
  },[])
  // const [data,setData] = useState<Arrauf>()
  // const baseUrl = 'http://localhost:3000/api.ar-rauf.org'
  // const getData = async () => {
  //   await axios
  //   .get(`${baseUrl}/cms/home`)
  //   .then(response => {
  //       setData(response.data)
  //   })
  // }

  // useEffect(() => {
  //   getData();
  // },[])
  return (
    <div className="w-full h-full">
      <div className="flex flex-row">
        <div className="w-[40%] h-[610px] ml-36">
          <h1 className="text-steel-blue font-serif font-bold text-5xl text-left mt-8">
            Ar Rauf Islamic School <span className="text-green">Membangun Generasi Cerdas & Berakhlak Mulia Sesuai Sunnah</span>
          </h1>
          <h3 className="text-lg font-serif font-medium mt-7 ">
            {data?.data.quote.quote_sub}
            Perhatian pendidikan anak sejak dini ini akan memberikan efek positif pada pembentukan karakter. Dan tiada pendidikan yang lebih agung selain mengenalkan kitab Al-Qur’an dan sunnah sejak dini.
          </h3>
          <div className="flex flex-col gap-5 text-center mt-10">
            <Link 
            href={""}
            className="w-full h-14 bg-green text-white font-serif text-xl py-3 rounded-md hover:bg-steel-blue">Daftar Sekarang</Link>
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
        <h1 className="text-lg font-serif italic ">Ar Rauf Islamic School</h1>
        <div className="flex flex-row gap-3 font-serif text-lg pt-8 pb-3"> 
          <Link 
          href={""}
          className="bg-green w-28 rounded-md h-14 text-white text-center py-3"
          >TK</Link>
          <Link 
          href={""}
          className="bg-green w-28 rounded-md h-14 text-white text-center py-3"
          >SD</Link>
        </div>
      </div>
      <Kurikulum/>
      <div className="flex flex-col w-full text-center text-blue-tua font-serif text-base">
        <h3 className="text-blue-tua font-bold my-6">MOTTO</h3>
        <h3 className="text-blue-tua text-4xl mb-8">Ar Rauf Islamic School</h3>
        <div className="flex flex-col mx-28">
          <div className="flex flex-row text-justify gap-2 py-2">
            <IoIosWater className="w-10 h-10 py-2 px-2 rounded-lg bg-blue-tua" color="white"/>
            <h3>Salimul Aqidah: “Memiliki pemahaman aqidah yang lurus, sebagaimana para salaful ummah.”</h3>
          </div>
          <div className="flex flex-row text-justify gap-2 py-2">
            <IoIosWater className="w-10 h-10  py-2 px-2 rounded-lg bg-blue-tua" color="white"/>
            <h3>Akhlaqul Karimah: “Memiliki Akhlak yang baik untuk diri sendiri, orangtua, masyarakat dan seluruh makhluk Allah ﷻ yang ada di muka bumi ini.”</h3>
          </div>
          <div className="flex flex-row text-justify gap-2 py-2">
            <IoIosWater className="w-10 h-10  py-2 px-2 rounded-lg bg-blue-tua" color="white"/>
            <h3>Shahihul Ibadah: “Memiliki kemampuan untuk melakukan ibadah sesuai dengan apa yang diajarkan oleh Allah ﷻ dan Rasul-nya ﷺ.”</h3>
          </div>
          <div className="flex flex-row text-justify gap-2 py-2">
            <IoIosWater className="w-10 h-10  py-2 px-2 rounded-lg bg-blue-tua" color="white"/>
            <h3>Akhlaqul Karimah: “Memiliki Akhlak yang baik untuk diri sendiri, orangtua, masyarakat dan seluruh makhluk Allah ﷻ yang ada di muka bumi ini.”</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center font-serif text-4xl text-blue-tua my-8">Kegiatan Sekolah</h3>
        <div className="grid grid-cols-3 w-[60%] gap-8">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center font-serif text-4xl text-blue-tua my-8">Ekstrakulikuler</h3>
        <div className="grid grid-cols-3 w-[60%] gap-8">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <div className="flex flex-col w-full h-72 justify-center items-center font-serif bg-slate-100 text-blue-tua">
        <h3 className="text-4xl my-8">
          Daftarkan Putra & Putri Anda Segera
        </h3>
        <h3>
        “Mencetak generasi yang cerdas, berkualitas dan berakhlak mulia sesuai pemahaman Salaf As-Shalih.”
        </h3>
        <Link 
            href={""}
            className="w-56 h-14 my-8 bg-green text-white font-serif text-center text-xl py-3 rounded-md hover:bg-steel-blue">Daftar Sekarang</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center font-serif text-4xl text-green my-8">Testimoni tentang Sekolah Kami </h3>
        <div className="grid grid-cols-2 w-[60%] gap-8">
          <CardTestimoni/>
          <CardTestimoni/>
          <CardTestimoni/>
          <CardTestimoni/>
        </div>
      </div>
    </div>
  );
}
