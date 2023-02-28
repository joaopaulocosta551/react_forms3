import { Button } from "./style";

interface IProps{
    value: string;
}

export function ButtonLogin({value}: IProps){
    return <Button>{value}</Button>
    
}