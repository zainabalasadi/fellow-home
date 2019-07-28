import Button from "@material-ui/core/Button";
import React from "react";
import {theme} from './Theme'



export function buttonFill(props){
    let style={
        backgroundColor: props.colour,
        color: props.colour==theme.colors.white? theme.colors.primary : theme.colors.white,
        opacity: props.disabled ? 0.4 : 1
    };
    return(
    <Button className={props.className} href={props.href} onClick={()=>props.click()} disabled={props.disabled} variant="contained" color={props.colour} style={style} disableRipple={true}>
        {props.message}
    </Button>
    )
}

export function buttonOutline(props){
    let style={
        backgroundColor: theme.colors.white,
        color: props.colour,
        borderColor: props.colour,
        opacity: props.disabled ? 0.4 : 1
    };
    return(
        <Button  className={props.className} href={props.href} onClick={()=>props.click()}  disabled={props.disabled} variant="outlined" color={props.colour} style={style} disableRipple={true}>
            {props.message}
        </Button>
    )
}
export function buttonLink(props){
    let style={
        backgroundColor: theme.colors.white,
        color: props.colour,
        opacity: props.disabled ? 0.4 : 1
    };
    return(
        <Button  className={props.className} href={props.href} onClick={()=>props.click()}  disabled={props.disabled} color={props.colour} style={style} disableRipple={true}>
            {props.message}
        </Button>
    )
}

export function buttonPlus(props){
    return(
        <button onClick={()=>props.click()}  disabled={props.disabled} className={props.disabled?
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed inactive":
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed"}>+</button>
    )
}
export function buttonMinus(props){
    return(
        <button onClick={()=>props.click()}  disabled={props.disabled} className={props.disabled?
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed inactive":
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed"}>-</button>
    )
}
