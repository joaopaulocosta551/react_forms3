import {DivInputs, Inputs, Label} from './styles'
import {IconType} from 'react-icons'
import { useState } from 'react';
import {FiEyeOff} from 'react-icons/Fi';
import {FiEye} from 'react-icons/Fi';


interface IProps{
    placeholder: string;
    Label: string;
    Icon: IconType;
    type: "text" | "password" | "email";
    hasEye?: boolean;
}



export function DivInputsCustom({placeholder, Label, Icon, type, hasEye=false}: IProps){

    const [isPassword, setIsPassword] = useState(false)

    return <DivInputs>
                <Label />
                <Icon />
                <Inputs
                    placeholder={placeholder}
                    type={type === "password" ? (isPassword ? "text" : "password") : type}
                    required />
                {
                    hasEye && (
                        <>
                            {isPassword && <FiEye onClick={() => setIsPassword(false)} style={{cursor: 'pointer', marginRight: '20px'}}/>}
                            {!isPassword && <FiEyeOff onClick={() => setIsPassword(true)} style={{cursor: 'pointer', marginRight: '20px'}}/>}
                        </>
                    )
                }
            </DivInputs>
}