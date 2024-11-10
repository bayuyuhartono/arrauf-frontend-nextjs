"use client"

import { Ppdb } from "../types/arrauf";

export default function Daftar(props : {data : Ppdb}) {
    function newWindow() {
        window.open(props?.data?.link)
    }
    return(
        <div className="w-full h-full justify-items-center">
            <div className="w-[1000px] h-[400px] items-center justify-center text-2xl font-serif">
                    <h1 className="text-4xl font-bold text-blue-tua text-center">Daftar PPDB</h1>
                    <br />
                    <p>
                    Assalamualaikum Warahmatullahi Wabarakatuh.
                    </p>
                    <br />
                    <p>
                    Jika Bapak / Ibu berminat untuk mendaftarkan putra/i Anda Silahkan Isi Formulir Pendaftaran dibawah ini dengan menekan tombol <span className="font-bold text-green">“Formulir PPDB”</span> yang sudah disediakan.
                    </p>
                    <br />
                    <p>
                    Setelah anda melakukan pengisian data maka tim PPDB Ar Rauf Islamic School akan menghubungi anda. Syukron.
                    </p>
                    <br />
                    <p>
                    Wassalamualaikum Warahmatullahi Wabarakatuh.
                    </p>
            </div>
            <button 
                onClick={newWindow}
                className="w-56 h-14 mt-8 mb-40 bg-green text-white font-serif text-center text-xl py-3 rounded-md hover:bg-greentua"
                >Formulir Pendaftaran
            </button>
        </div>
    )
}