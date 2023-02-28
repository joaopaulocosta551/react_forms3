import { ButtonWithIcon, DivButton} from "./styles";
import { IconType } from "react-icons";

interface IProps{
    value: string;
    Icon: IconType;
}

export function Button({value, Icon}: IProps) {

    return  <DivButton>
                <Icon style={{marginRight: '5px'}}/>
                <ButtonWithIcon style={{fontSize: '12px'}}>{value}</ButtonWithIcon>
            </DivButton>
}