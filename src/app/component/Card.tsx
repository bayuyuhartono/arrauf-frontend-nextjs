import { Schoolactivity } from "../types/arrauf";

export default function Card(props : {data : Schoolactivity}) {
    return(
        <div className="w-72 text-center font-serif text-blue-tua text-lg">
            <img src={props.data?.image} alt="" className="w-72 h-48 object-cover pb-2" />
            <p>{props.data?.caption}</p>
        </div>
    )
}