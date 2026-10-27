import React from "react";
import { Box, Container, Stack } from "@mui/system";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { VisibilityOff } from "@mui/icons-material";

const list = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">pop dishes</Box>

          <Stack className="cards-frame">
            {list.length !== 0 ? (
              list.map((ele, index) => {
                return (
                  <CssVarsProvider key={index}>
                    <Card className="card">
                      <CardCover>
                        <img src={ele.imagePath} alt="" />
                      </CardCover>

                      <CardCover className="card-cover" />

                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          sx={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            level="h2"
                            sx={{
                              fontSize: "lg",
                              color: "#fff",
                              mb: 1,
                            }}
                          >
                            {ele.productName}
                          </Typography>

                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            20
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </CardContent>

                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                          height: "60px",
                          background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.55) 25%, rgba(0, 0, 0, 0.51) 44.27%, #000 100%)",
                        }}
                      >
                        <Typography
                          startDecorator={<DescriptionOutlinedIcon />}
                          textColor="neutral.300"
                        >
                          This is delicious meal
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">New products are available</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
