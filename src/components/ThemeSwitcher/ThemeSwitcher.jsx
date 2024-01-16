import "./ThemeSwitcher.scss";

function ThemeSwitcher() {
  const setDarkMode = () => {
    document.querySelector("boby").setAttribute("dark-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("boby").setAttribute("light-theme", "light");
  };
  return <input type="checkbox"/>;
}

export default ThemeSwitcher;
