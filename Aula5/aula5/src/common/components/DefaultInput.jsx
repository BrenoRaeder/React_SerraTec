import { Input } from './style';

export function DefaultInput(props) {
    return (
        <Input type="text" state={props.state} placeholder={props.message}/>
    )
}