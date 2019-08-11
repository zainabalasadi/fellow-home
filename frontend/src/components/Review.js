import React,{Component} from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import Star from './Star'

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