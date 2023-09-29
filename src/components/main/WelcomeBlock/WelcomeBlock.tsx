import { Typography, Box } from "@mui/material";
const WelcomeBlock = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography
        sx={{
          fontSize: "46px",
          color: "#4F4F4F",
          fontWeight: "400",
          lineHeight: "143%",
          letterSpacing: "0.17px",
          textAlign: "center",
        }}
      >
        Добро пожаловать
      </Typography>
    </Box>
  );
};

export default WelcomeBlock;
