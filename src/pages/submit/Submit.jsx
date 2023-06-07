import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import photo from "../../images/illustration-thank-you.svg"
import { useLocation } from "react-router-dom";

function Submit() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const number = queryParams.get("n");
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
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img src={photo}/>
          </Typography>
          <Typography
            sx={{
              color: "#ca6212",
              display: "flex",
              justifyContent: "center",
              fontSize: "10px",
              border: "1px solid",
              width: "120px",
              marginTop: "20px",
              marginLeft: "85px",
              borderRadius: "10px",
              padding: "5px",
              borderColor: "#353839",
              backgroundColor: "#353839",
            }}
          >
            You selected {number} out of 5
          </Typography>
          <Typography
            sx={{ color: "white", display: "flex", justifyContent: "center" }}
          >
            <h2>
              <b>Thank you!</b>
            </h2>
          </Typography>
          <Typography
            variant="body2"
            color="grey"
            marginLeft={"14px"}
            textAlign={"center"}
            fontSize={"13px"}
          >
            We appreciate you taking the time to give a rating. if you ever need
            more support, don't hesitate to get in touch!
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Submit