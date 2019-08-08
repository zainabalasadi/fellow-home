import Button from "@material-ui/core/Button";
import React from "react";
import {theme} from './Theme'



export function ButtonFill(props){
    let style={
        backgroundColor: props.color,
        color: props.color==theme.colors.white? theme.colors.primary : theme.colors.white,
        opacity: props.disabled ? 0.4 : 1
    };
    return(
    <Button className={props.className} href={props.href} onClick={()=>props.click()} disabled={props.disabled} variant="contained" color={props.color} style={style} disableRipple={true}>
        {props.message}
    </Button>
    )
}

export function ButtonOutline(props){
    let style={
        backgroundColor: theme.colors.white,
        color: props.color,
        borderColor: props.color,
        opacity: props.disabled ? 0.4 : 1
    };
    return(
        <Button  className={props.className} href={props.href} onClick={()=>props.click()}  disabled={props.disabled} variant="outlined" color={props.color} style={style} disableRipple={true}>
            {props.message}
        </Button>
    )
}

export function ButtonLink(props){
    let style={
        backgroundColor: theme.colors.white,
        color: props.color,
        opacity: props.disabled ? 0.4 : 1
    };
    return(
        <Button  className={props.className} href={props.href} onClick={()=>props.click()}  disabled={props.disabled} color={props.color} style={style} disableRipple={true}>
            {props.message}
        </Button>
    )
}

export function ButtonPlus(props){
    return(
        <button onClick={()=>props.click()}  disabled={props.disabled} className={props.disabled?
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed inactive":
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed"}>+</button>
    )
}
export function ButtonMinus(props){
    return(
        <button onClick={()=>props.click()}  disabled={props.disabled} className={props.disabled?
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed inactive":
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed"}>-</button>
    )
}
