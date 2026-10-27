import { Box, Container, Stack } from "@mui/system";
import {
  CssVarsProvider,
  Typography,
  CardOverflow,
  Card,
  AspectRatio,
} from "@mui/joy/";

const activeUsers = [
  { memberName: "Martin", imagePath: "/img/martin.webp" },
  { memberName: "Justin", imagePath: "/img/justin.webp" },
  { memberName: "rose", imagePath: "/img/rose.webp" },
  { memberName: "Nusret", imagePath: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className={"new-products-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users!</Box>

          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.imagePath} alt={ele.memberName} />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="member-nickname">
                        <Typography className={"title"}>
                          {ele.memberName}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
