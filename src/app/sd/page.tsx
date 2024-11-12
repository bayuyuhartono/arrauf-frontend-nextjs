"use client"

import axios from "axios"
import CardMotto from "../component/CardMotto"
import { useEffect, useState } from "react";
import { Arrauf } from "../types/arrauf";

export default function Sd(){
    const[data, setData] = useState<Arrauf>();
    const baseURL = process.env.NEXT_PUBLIC_API_URL

    const getData = async() => {
      await axios
      .get(`${baseURL}/cms/home`)
      .then(Response => {setData(Response.data)})
    }
  
    useEffect(() => {
      getData()
    },[])
    return(
        <div className="flex flex-col w-full h-full font-serif text-lg">
            <h3 className="text-blue-tua text-4xl font-bold mb-8 text-center">SD</h3>
            <div className="">
                <img src="/arrauf.jpg" alt="" className="w-full h-[450px] object-cover" />
                <h3 className="text-">TK Ar Rauf Islamic school</h3>
            </div>
            <div className="font-serif my-14">
                <h3 className="text-5xl text-center font-bold">Sambutan Kepala Sekolah</h3>
                <br />
                <div className="mx-36">
                    <p>
                    Segala puji syukur kita kepada Allah ﷻ Rabb semesta alam yang telah memberikan rahmat dan hidayah-Nya kepada kita semua. Sholawat serta salam kita haturkan kepada junjungan kita Nabi besar Muhammad ﷺ, yang membawa kita dari jaman kebodohan ke jaman yang penuh dengan ilmu.
                    </p>
                    <br />
                    <p>
                    Kami segenap Guru dan Staf TK AR RAUF ISLAMIC SCHOOL, menyambut baik calon Siswa-siswi atau orang tua murid untuk bergabung di TK AR RAUF ISLAMIC SCHOOL, Mudah-mudahan Kita dapat melaksanakan amanah ini dengan sebaik-baiknya.
                    </p>
                    <br />
                    <p>
                    Kami segenap Guru dan Staf mengucapakan terimakasih pada orang tua murid yang sudah mempercayakan pendidikan putra-putrinya di TK AR RAUF ISLAMIC SCHOOL mudah-mudahan kita dapat mencetak generasi yang cerdas, berkualitas, Shalih/Shalihah dan memiliki akhlak serta budi pekerti yang baik di lingkungan masyarakat amin yaa Robbalalamin.
                    </p>
                    <br />
                    <p>
                    Akhirnya segala kekurangan kita serahkan kepada Allah. Namun tetap semangat untuk memperbaiki diri,dengan harapan dapat bermanfaat bagi diri sendiri dan lingkungan masyarakat.
                    </p>
                </div>
            </div>
            <div className="font-serif mx-36 mb-20">
                <h3 className="text-5xl text-left font-bold mb-4">Visi</h3>
                <li>
                    “Terwujudnya Lembaga Pendidikan Islam yang berkualitas, berbasis pada penguasaan hafalan Al-Qur’an dan akhlak mulia.”
                </li>
            </div>
            <div className="font-serif mx-36 mb-20">
                <h3 className="text-5xl text-left font-bold mb-4">Misi</h3>
                <li>
                Menanamkan Aqidah yang benar, adab dan akhlak yang bersumber pada Alqur’an dan assunnah, guna membentuk generasi yang berakhlak mulia.
                </li>
                <li>
                    Membiasakan membaca dan menghafal Alqur’an.
                </li>
                <li>
                Menjadikan Alqur’an sebagai pembentukan karakter anak, guna membentuk karakter lebih mandiri, disiplin, tanggungjawab dan Amanah.
                </li>
            </div>
            <div className="font-serif mx-36 mb-20">
                <h3 className="text-5xl text-left font-bold mb-4">Motto</h3>
                <div className="flex flex-col">
                {data?.data.motto.map((item, index) => {
                        return (
                        <CardMotto key={index} data={item}/>
                        )
                    })}
                </div>
            </div>
            <div className="font-serif mx-36 mb-4 gap-2">
                <h3 className="text-5xl text-left font-bold mb-4">Kurikulum</h3>
               <li>
                Diniyyah dan akhlak: 
                    <ul>
                    Ar Rauf Islamic School adalah pendidikan yang berfokus pada penguatan diniyyah (Aqidah, Fiqh dan Hadits) dan akhlak budi pekerti yang baik sesuai dengan pemahaman Ahlussunnah wal Jamaa’ah. Jadi output yang kami harapkan adalah anak mampu menunjukkan karakter yang baik di depan Allah dan seluruh makhluk Allah.
                    </ul>
               </li>
               <li>
                Tahfizh:
                <ul>
                    Ar Rauf Islamic School adalah pendidikan yang berfokus pada penguatan hafalan dari segi makhroj, tahsin, tajwid dan kelancaran hafalan. Jadi output yang kami harapkan adalah hafalan anak yg berkualitas bukan yang unggul dari segi kuantitas.
                </ul>
               </li>
            </div>
            <br />
            <div className="w-full h-[450px] mx-36 flex flex-row">
                <img src="/arrauf.jpg" alt="" className="w-[25%] h-[350px] object-cover" />
                <div className="flex flex-col px-12">
                    <h3 className="text-3xl text-left font-bold mb-4">Target Hafalan</h3>
                    <h3 className="text-left font-bold mb-4 text-xl">Unggulan Tahfidz:</h3>
                    <p>2-3 Juz (Juz 28, 29 dan 30)</p>
                    <br />
                    <h3 className="text-left font-bold mb-4 text-xl">Reguler Tahfidz:</h3>
                    <p>1 - 2 Juz (Juz 29 dan 30)</p>
                </div>
            </div>
            <div className="font-serif mx-36 mb-4">
                <h3 className="text-4xl text-left font-bold mb-4">Target Akhlak</h3>
                    <h3 className="text-left font-bold mb-4 text-xl">Pembiasaan Harian:</h3>
                    <ol className="list-decimal list-inside ">
                        <li>
                            Membiasakan salam saat datang ke sekolah, saat bertemu bu guru di dalam maupun di luar lingkungan sekolah.
                        </li>
                        <li>
                            Membiasakan salim/cium tangan dengan ibu  guru, orang tua,dan orang yang lebih tua.
                        </li>
                        <li>
                            Membiasakan mengucap kalimat thoyyibah: Alhamdulillah, SubhaanAllah, Astaghfirullah, MaasyaaAllah dll.
                        </li>
                        <li>
                            Membiasakan berdo’a di setiap melaksanakan kegiatan.
                        </li>
                        <li>
                            Membiasakan membaca Alqur’an /Iqro/buku bacaan Islami.
                        </li>
                        <li>
                            Belajar bersama dengan orangtua/walimurid
                        </li>
                        <li>
                            Membiasakan tidak fokus terhadap gadget/telepon seluler
                        </li>
                        <li>
                            Membiasakan menerima perbedaan dan menghindari bullying dari teman sekelas/adek kelas/kaka kelas/orang lain.
                        </li>
                    </ol>
                    <br />
                    <h3 className="text-left font-bold mb-4 text-xl">Pembiasaan Mingguan:</h3>
                    <ul className="list-decimal list-inside">
                        <li>
                            Mengikuti sholat jum’at bagi anak laki-laki.
                        </li>
                        <li>
                            Silaturrahmi/berkunjung kerumah teman dan saudara.
                        </li>
                        <li>
                            Membantu orang tua.
                        </li>
                        <li>
                            Bersedekah
                        </li>
                    </ul>
            </div>
        </div>
    )
}