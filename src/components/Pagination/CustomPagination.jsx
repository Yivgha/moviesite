import Pagination from '@mui/material/Pagination';
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };


    return (
        <div
            
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
        >
            
            <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="secondary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
</div>
    );
}