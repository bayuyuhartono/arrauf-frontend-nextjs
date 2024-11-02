import { IoIosWater } from "react-icons/io";
import { Motto } from "../types/arrauf";

export default function CardMotto(props :{data :Motto}) {
    return(
        <div className="flex flex-col mx-28 text-lg">
        <div className="flex flex-row text-justify gap-2 py-2">
          <IoIosWater className="w-10 h-10 py-2 px-2 rounded-lg bg-blue-tua" color="white"/>
          <h3 className="font-extrabold">{props.data.title}:</h3>
          <h3>{props.data.description}</h3>
        </div>
      </div>
    )
}