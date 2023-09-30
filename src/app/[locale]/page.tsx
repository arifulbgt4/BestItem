import { Grid } from "@mui/material";
import { useTranslations } from "next-intl";

import ContentItem from "src/widgets/ContentItem";
import HeroBanner from "src/widgets/HeroBanner/inedex";

export default function Home() {
  // const t = useTranslations();
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeroBanner />
      </Grid>
      <Grid item xs={12}>
        <ContentItem />
      </Grid>
    </Grid>
  );
}
