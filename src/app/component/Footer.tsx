import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { TbMapSearch, TbWorldCheck } from "react-icons/tb";

export default function Footer() {
    return(
        <footer className="bg-blue-tua text-white font-serif flex flex-col justify-center items-center">
            <div className="w-[800px] my-5">
                <h1 className="text-center text-lg">Kontak Kami :</h1>
                <li className="flex flex-row py-2 px-2 gap-2">
                    <BsTelephoneForward className="w-6 h-5"/>
                    <p>085838375849</p>
                </li>
                <li className="flex flex-row py-2 px-2 gap-2">
                    <MdOutlineMail className="w-6 h-5"/>
                    <p>Email: info@arraufislamicschool.org</p>
                </li>
                <li className="flex flex-row py-2 px-2 gap-2">
                    <TbWorldCheck className="w-6 h-5"/>
                    <p>www.arraufislamicschool.org</p>
                </li>
                <li className="flex flex-row py-2 px-2 gap-2">
                    <TbMapSearch className="w-6 h-5"/>
                    <p>Jl. Raya Palasari, No. 48 RT.003/RW.03. Kp.Serdang, Desa Serdang Wetan, Kec.Legok, Kab.Tangerang, Kode Pos 15820</p>
                </li>
                <h3 className="text-center">Copyright © {new Date().getFullYear()} - Ar Rauf Islamic School</h3>
            </div>
        </footer>
    )
}