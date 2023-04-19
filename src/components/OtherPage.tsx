import React from "react";
import { useTheme } from "../ThemeContext";

function OtherPage() {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);
  return (
    <div>
      <h1>Hello other Page</h1>
    </div>
  );
}

export default OtherPage;
