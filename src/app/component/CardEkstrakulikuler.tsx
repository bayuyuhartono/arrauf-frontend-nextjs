import { Ekstrakulikuler } from "../types/arrauf";

export default function CardEkstrakulikuler(props : {data : Ekstrakulikuler}) {
    return(
        <div className="w-72 text-center font-serif text-blue-tua text-xl font-bold">
            <img src={`https://admin.ar-rauf.org/${props.data.image}`} alt="" className="w-64 h-32 object-cover pb-2" />
            <p>{props.data?.caption}</p>
        </div>
    )
}