import React from "react";
import {
Box,
Container,
Typography,
makeStyles,

} from "@material-ui/core";
import UnderConstructionImage from "../assets/under-construction.jpg";


const useStyles = makeStyles((theme) => ({
root: {
backgroundColor: "#fff",
height: "100%",
paddingBottom: theme.spacing(3),
paddingTop: theme.spacing(3),
},
image: {
marginTop: 50,
display: "inline-block",
maxWidth: "100%",
width: 800,

},

}));

const UnderConstruction = () => {
const classes = useStyles();

return (
<div className={classes.root} >
<Box
display="flex"
flexDirection="column"
height="100%"
justifyContent="center"
>
<Container maxWidth="md">
<Box textAlign="center">
<img alt="Under-Construction" className={classes.image} src={UnderConstructionImage} />
</Box>
<Typography align="center" color="textPrimary" variant="h4">
WEBSITE IS UNDER CONSTRUCTION
</Typography>


</Container>
</Box>
</div>
);
};

export default UnderConstruction ;