import styles from "./ThemeSwitcher.module.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "use-local-storage";

declare type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;

interface IThemeSwitcherProps {
  theme: string;
  setTheme: Setter<string>;
}

export default function ThemeSwitcher(props: IThemeSwitcherProps) {
  const { theme, setTheme } = props;

  const handleSwitch = () => {
    console.log("Current theme: ", theme);
    if (theme === "light") {
      setTheme("dark");
      console.log("Switching to dark.");
    } else {
      setTheme("light");
      console.log("Switching to light.");
    }
  };

  return (
    <div className={theme}>
      <div className={`${styles.container}`}>
        <div className={styles.content}>
          <Button onClick={handleSwitch} className={styles.button}>
            <FontAwesomeIcon className={styles.icon} icon={faMoon} />
          </Button>
        </div>
      </div>
    </div>
  );
}
