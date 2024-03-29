/**
 * Button material ui components
 * Written by: Jason Love
 */
import Button from "@material-ui/core/Button"
import React from "react"
import {theme} from './Theme'

/**
 * Filled button component
 * @param {*} props button details
 */
export function ButtonFill(props){
    let style={
        backgroundColor: props.color,
        color: props.color===theme.colors.white? theme.colors.primary : theme.colors.white,
        opacity: props.disabled ? 0.4 : 1
    };

    return(
        <Button className={props.className} href={props.href} onClick={()=>props.click()} disabled={props.disabled} variant="contained" color={props.color} style={style} disableRipple={true}>
            {props.message}
        </Button>
    )
}

/**
 * Outlined button component
 * @param {*} props button details
 */
export function ButtonOutline(props){
    let style={
        backgroundColor: theme.colors.white,
        color: props.color,
        borderColor: props.color,
        opacity: props.disabled ? 0.4 : 1
    };
    return(
        <Button className={props.className} href={props.href} onClick={()=>props.click()}  disabled={props.disabled} variant="outlined" color={props.color} style={style} disableRipple={true}>
            {props.message}
        </Button>
    )
}

/**
 * Button link component
 * @param {*} props button details
 */
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

/**
 * Plus button component
 * @param {*} props button details
 */
export function ButtonPlus(props){
    return(
        <button onClick={()=>props.click()}  disabled={props.disabled} className={props.disabled?
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed inactive":
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed"}>+</button>
    )
}

/**
 * Minus button component
 * @param {*} props button details
 */
export function ButtonMinus(props){
    return(
        <button onClick={()=>props.click()}  disabled={props.disabled} className={props.disabled?
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed inactive":
            "buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed"}>-</button>
    )
}
