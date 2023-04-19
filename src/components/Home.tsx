// components/Home.tsx
import { useTheme } from "../ThemeContext";
import Toggle from "./Toggle";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <h1>Home</h1>
      <Toggle />
    </div>
  );
};

export default Home;
