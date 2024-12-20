import { Schoolactivity } from "../types/arrauf";

export default function Card(props : {data : Schoolactivity}) {
    return(
        <div className="w-72 text-center font-serif text-blue-tua text-xl font-bold">
            <img src={`${process.env.NEXT_PUBLIC_ADMIN_URL}/${props.data?.image}`} alt="" className="w-64 h-32 object-cover pb-2" />
            <p>{props.data?.caption}</p>
        </div>
    )
}