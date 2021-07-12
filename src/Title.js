import Button from './button.js'
const Titlebody = (props) => {

    return (
        <>
        <h1>{props.myTitleText}</h1>
        <h2>{props.myTitleSubText}</h2>

        <Button link="#" buttonText="Awesome" newWindow={true} />
        </>
    )
}

export default Titlebody