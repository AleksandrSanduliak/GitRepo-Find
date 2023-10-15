import { Typography, Box, Chip } from "@mui/material";
import { IDetailedInfo } from "src/services/types";
import StarRateIcon from "@mui/icons-material/StarRate";
const DetailedInfo = ({ currentRow, currentRowClick }: IDetailedInfo) => {
  return (
    <>
      <Box
        sx={{
          width: "30%",
          minWidth: "21.875rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#F2F2F2",
          padding: "1.5rem",
          textAlign: "left",
        }}
      >
        {currentRowClick ? (
          <>
            <Box
              width="100%"
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
              height="100vh"
            >
              <Typography
                sx={{
                  color: "black",
                  fontSize: "2rem",
                  fontWeight: "400",
                  lineHeight: "2.5rem",
                  marginBottom: "1rem",
                }}
              >
                {currentRow.name}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                marginBottom="1rem"
              >
                <Chip
                  size="medium"
                  label={currentRow.langForRow || "Язык не указан"}
                  sx={{ background: "#2196F3", maxWidth: "max-content" }}
                />
                <Box sx={{ display: "flex" }}>
                  <StarRateIcon
                    sx={{
                      color: "yellow",
                      width: "1.5rem",
                      marginRight: "0.5rem",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: "400",
                      lineHeight: "143%",
                      letterSpacing: "0.011rem",
                    }}
                  >
                    {currentRow.stargazersCount}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexWrap="wrap" marginBottom="1.5rem">
                {currentRow.langs.map((lang: { name: string }) => {
                  return (
                    <Chip
                      sx={{ mr: "1rem", marginBottom: "0.3rem" }}
                      size="small"
                      label={lang.name || "Язык не указан"}
                      key={lang.name}
                    />
                  );
                })}
              </Box>
              <Typography>
                {currentRow.license ?? "Лицензия отсутствует"}
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Typography
              fontSize="0.875rem"
              fontWeight="400"
              lineHeight="143%"
              letterSpacing="0.011rem"
              height="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#4F4F4F"
            >
              Выберите репозитарий
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default DetailedInfo;
