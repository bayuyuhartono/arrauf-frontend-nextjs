import Card from "../component/Card";

export default function Tk(){
    return(
        <div className="flex flex-col w-full h-full font-serif">
            <h3 className="text-blue-tua text-4xl font-bold mb-8 text-center">TK</h3>
            <div className="">
                <img src="/arrauf.jpg" alt="" className="w-full h-[450px] object-cover" />
                <h3 className="text-">TK Ar Rauf Islamic school</h3>
            </div>
            <div className="font-serif mb-4">
                <h3 className="text-4xl text-center font-bold mb-4">Sambutan Kepala Sekolah</h3>
                <h3 className="mx-36">Segala puji syukur kita kepada Allah ﷻ Rabb semesta alam yang telah memberikan rahmat dan hidayah-Nya kepada kita semua. Sholawat serta salam kita haturkan kepada junjungan kita Nabi besar Muhammad ﷺ, yang membawa kita dari jaman kebodohan ke jaman yang penuh dengan ilmu.</h3>
            </div>
            <div className="font-serif mx-36 mb-4">
                <h3 className="text-4xl text-left font-bold mb-4">Visi</h3>
                <li>“Terwujudnya Lembaga Pendidikan Islam yang berkualitas, berbasis pada penguasaan hafalan Al-Qur’an dan akhlak mulia.”</li>
            </div>
            <div className="font-serif mx-36 mb-4">
                <h3 className="text-4xl text-left font-bold mb-4">Misi</h3>
                <li>“Terwujudnya Lembaga Pendidikan Islam yang berkualitas, berbasis pada penguasaan hafalan Al-Qur’an dan akhlak mulia.”</li>
            </div>
            <div className="font-serif mx-36 mb-4">
                <h3 className="text-4xl text-left font-bold mb-4">Motto</h3>
                <div className="flex flex-row">
                    <li>Salimul Aqidah:</li>
                    <ul>“Memiliki pemahaman aqidah yang lurus, sebagaimana para salaful ummah.”</ul>
                </div>
            </div>
            <div className="font-serif mx-36 mb-4">
                <h3 className="text-4xl text-left font-bold mb-4">Kurikulum</h3>
                <div className="flex flex-row">
                    <li>Salimul Aqidah:</li>
                    <ul>“Memiliki pemahaman aqidah yang lurus, sebagaimana para salaful ummah.”</ul>
                </div>
            </div>
            <div className="w-full h-[450px] mx-36 flex flex-row">
                <img src="/arrauf.jpg" alt="" className="w-[25%] h-[350px] object-cover" />
                <div className="flex flex-col px-12">
                    <h3 className="text-3xl text-left font-bold mb-4">Target Hafalan</h3>
                    <h3 className="text-left font-bold mb-4 text-xl">Kelompok A :</h3>
                    <li>Qs.Al Zalzalah (Minimal)</li>
                    <li>Qs.Al Zalzalah (Minimal)</li>
                    <br />
                    <h3 className="text-left font-bold mb-4 text-xl">Kelompok B :</h3>
                    <li>Qs.Al Zalzalah (Minimal)</li>
                    <li>Qs.Al Zalzalah (Minimal)</li>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-center font-serif text-4xl my-8">Kegiatan Unggulan</h3>
                <div className="grid grid-cols-3 w-[60%] gap-8">
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-center font-serif text-4xl my-8">Kegiatan Ekskul</h3>
                <div className="grid grid-cols-3 w-[60%] gap-8">
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
        </div>
    )
}