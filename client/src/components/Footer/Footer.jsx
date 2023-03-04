import { Box } from "@mui/system";
import React from "react";
import styles from "./style";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box sx={styles.footer}>
      <footer>Copyright &copy; {year}. ShareNaam.pvt.Ltd</footer>
    </Box>
  );
}
