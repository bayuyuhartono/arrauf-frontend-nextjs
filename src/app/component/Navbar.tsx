import Link from "next/link";

export default function Navbar() {
    return(
        <div className="w-screen h-[110px] bg-transparent flex flex-row items-center">
                <img 
                src="LOGO-SEKOLAH-AR-RAUF.png" 
                alt="Logo Sekolah"
                className="w-[85px] h-[74px] items-center ml-36" />
                <div className="text-lg font-serif text-slate-500 ml-16">
                    <Link 
                    href={"/"}
                    className="px-3 hover:text-orange-400">Halaman Depan</Link>
                    <Link 
                    href="/tk"
                    className="px-3 hover:text-orange-400">TK</Link>
                    <Link 
                    href="/sd"
                    className="px-3 hover:text-orange-400">SD</Link>
                    <Link 
                    href="/unit"
                    className="px-3 hover:text-orange-400">Unit Usaha</Link>
                    <Link 
                    href="/about"
                    className="px-3 hover:text-orange-400">Tentang Kami</Link>
                    <Link 
                    href={""}
                    className="px-3 hover:text-orange-400">Kontak Kami</Link>
                    {/* <Link 
                    href={""}
                    className="px-3 hover:text-orange-400">News</Link> */}
                    <Link 
                    href="/daftar"
                    className="px-3 hover:text-orange-400">Daftar PPDB</Link>
                </div>
        </div>
    )
}