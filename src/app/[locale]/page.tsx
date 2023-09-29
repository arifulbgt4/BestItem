import { Grid } from "@mui/material";
import { useTranslations } from "next-intl";

import ContentList from "src/widgets/ContentList";
import HeroBanner from "src/widgets/HeroBanner";

export default function Home() {
  // const t = useTranslations();
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeroBanner />
      </Grid>
      <Grid item xs={12}>
        <ContentList />
      </Grid>
    </Grid>
  );
}
