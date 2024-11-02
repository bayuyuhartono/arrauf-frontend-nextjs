import { GiGraduateCap } from "react-icons/gi";
import { Benefit } from "../types/arrauf";

export default function CardBenefit(props : {data: Benefit}) {
    return(
        <div className="flex flex-col bg-green-muda w-80 rounded-md font-serif py-2 px-2">
            <div className="flex flex-row">
                <GiGraduateCap  className="icon w-11 h-8" color="#2cb1bc"/>
                <h3 className="text-green text-lg font-bold">{props.data.title}</h3>
            </div>
            <ul className="list-disc list-inside text-base text-justify">
                <li>
                    {props.data.point}
                </li>
            </ul>
        </div>
    )
}