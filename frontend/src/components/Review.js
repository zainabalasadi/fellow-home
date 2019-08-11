/**
 * Review component for listings
 * Written by: William Chan
 */

import React,{Component} from "react"
import {ListItem, ListItemText, List} from "@material-ui/core"
import Star from './Star'

/**
 * Method to render review component
 */
export default class Review extends Component{
    constructor(props){
        super(props)
        this.reviewList=props.reviewList;
    }

    render() {
        return (
            <List style={{width: "90%"}} className="action-lists">
                {this.reviewList.forEach(function (review) {
                    /*(({ id, primary, secondary, person }) => (*/
                    return (
                        <React.Fragment key={review.date}>
                            <ListItem button>
                                <ListItemText primary={JSON.stringify(review.rating)} secondary={<Star/>}/>
                                <ListItemText primary={review.title} secondary={review.content}/>
                            </ListItem>
                        </React.Fragment>
                    )
                })}
            </List>
        );
    }
}