import { BiBookOpen } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";


export default function Kurikulum() {
    return(
        <div className="w-full h-72 text-xs font-serif bg-green-muda">
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col w-[20%]">
                    <div className="flex flex-row">
                        <BiBookOpen className="icon w-11 h-8" color="#2cb1bc"/>
                        <h3 className="text-green text-lg font-bold">KURIKULUM</h3>
                    </div>
                    <div>
                        <h3 className="font-bold">Diniyah dan Akhlak</h3>
                        <p>Pendidikan yang berfokus pada penguatan diniyyah (Aqidah, Fiqh dan Hadist) dan akhlak budi pekerti yang baik sesuai dengan pemahaman Ahlussunnah wal Jama'ah.</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Tahfidz</h3>
                        <p>Pendidikan yang berfokus pada penguatan hafalan dari segi makhroj, tahsin, tajwid dan kelancaran dalam hafalan.</p>
                    </div>
                </div>
                <div className="flex flex-col w-[20%] m-4">
                    <div className="flex flex-row">
                    <FaSchool className="icon w-11 h-7" color="#2cb1bc"/>
                    <h3 className="text-green text-lg font-bold">FASILITAS</h3>
                    </div>
                    <div>
                    <li>Ruangan belajar ber AC untuk SD dan bertema lingkungan untuk TK</li>
                    <li>Ruang tunggu</li>
                    <li>Ruang bermain</li>
                    <li>Lapangan bermain</li>
                    <li>Taman bacaan</li>
                    </div>
                </div>
                <div className="flex flex-col w-[20%]">
                    <div className="flex flex-row">
                        <GiTeacher className="icon w-11 h-8" color="#2cb1bc"/>
                        <h3 className="text-green text-lg font-bold">PENGAJAR</h3>
                    </div>
                    <li>Catatan pendidikan guru mulai dari SMA - S1 dari Universitas ternama.</li>
                    <li>Berpengalaman dan berkepribadian Islami.</li>
                    <li>Setiap minggu guru- guru dan staf pengajar mendapatkan training peningkatan mutu.</li>
                </div>
                <div className="flex flex-col w-[20%]">
                    <div className="flex flex-row">
                        <FaChildren className="icon w-11 h-8" color="#2cb1bc"/>
                        <h3 className="text-green text-lg font-bold">KEGIATAN</h3>
                    </div>
                    <li>Pendampingan dan pembinaan akhlak.</li>
                    <li>Pembinaan praktek ibadah dan berbahasa (arab dan inggris)</li>
                    <li>Pembinaaan dalam kreativitas dan kerajinan </li>
                    <li>Upacara dua bahasa.</li>
                    <li>Fieldtrip bersama walimurid</li>
                    <li>Pidato, MTQ, MHQ, Beladiri</li>
                    <li>Memanah dan berenang</li>
                    <li>Bina Tsaqofah dan berwawasan keislaman.</li>
                </div>
            </div>
      </div>
    )
}