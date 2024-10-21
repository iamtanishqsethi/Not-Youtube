import Button from "./Button"

const ButtonList=()=>{
    return (
        <div className="flex">
            <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Live"/>
            <Button name="Songs"/>
            <Button name="Movies"/>
            <Button name="Sports"/>
        </div>
    )
}
export default ButtonList