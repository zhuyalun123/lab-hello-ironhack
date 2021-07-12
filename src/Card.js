import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';

let icon = ""

let iconAr = [icon1, icon2, icon3, icon4]

const Card = props => {

    if (props.href === "1") {
        icon = icon1
    }
    else if (props.href === "2")  {
        icon = icon2

    }  else if (props.href === "3")  {
        icon = icon3

    } else {
        icon = icon4

    }


    return (
        <div>
            <img src={iconAr[props.href]} alt="hola" />
            <h2>{props.title}</h2>
            <p>{props.subTitle}</p>

        </div>
    )
}

export default Card