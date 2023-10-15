import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
const Loader = () => {
  return (
    <>
      <Box
        display="flex"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Box>
    </>
  );
};

export default Loader;
