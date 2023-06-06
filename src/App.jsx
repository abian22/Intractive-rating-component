
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import icon from './images/icon-star.svg'
import './App.css'

function App() {

  const puntuacion = [1, 2, 3, 4, 5]

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: 5,
          backgroundColor: "hsl(216, 12%, 8%)",
          height: 350,
        }}
      >
        <CardContent>
          <Typography
            color="white"
            border={"1px solid"}
            borderColor={"#353839"}
            borderRadius={"20px"}
            width={"25px"}
            marginLeft={"20px"}
            justifyContent={"center"}
            alignContent={"center"}
            height={"24px"}
            backgroundColor={"#353839"}
            marginBottom={"20px"}
          >
            <img className="img" src={icon} />
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="white"
            marginLeft={"20px"}
          >
            <b>How did we do ?</b>
          </Typography>
          <Typography variant="body2" color="grey" marginLeft={"20px"}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Typography>
        </CardContent>

        <CardActions>
          <CardContent style={{ display: "flex", flexDirection: "row" }}>
            {puntuacion.map((p) => {
              return (
                <Typography
                  className="button"
                  color="white"
                  border={"1px solid"}
                  borderColor={"#353839"}
                  borderRadius={"30px"}
                  width={"50px"}
                  height={"45px"}
                  backgroundColor={"#353839"}
                  display={"flex"}
                  justifyContent={"center"}
                  marginLeft={"7px"}
                  alignItems={"center"}
                >
                  {p}
                </Typography>
              );
            })}
          </CardContent>
        </CardActions>
        <Button className="submit"
          sx={{
            backgroundColor: "#ca6212",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "280px",
            marginLeft: "30px",
            borderRadius: "20px",
          }}
        >
          Error
        </Button>
        {/* hover y onclick blanco*/}
      </Card>
    </>
  );
}

export default App
