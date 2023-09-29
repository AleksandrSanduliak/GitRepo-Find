import React from "react";
import cl from "./header.module.scss";
import { Input, Button } from "@mui/material";
import { searchRepo } from "../../store/repoSlice";
import { useAppDispatch } from "../../store/store";
const Header: React.FC = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const dispatch = useAppDispatch();
  const handleClick = (): void => {
    dispatch(searchRepo(inputValue));
  };

  return (
    <header className={cl.header}>
      <div className="header__container">
        <Input
          type="search"
          className={cl.header__input}
          placeholder="Введите поисковый запрос"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <Button
          sx={{ px: "1.5rem", py: "0.5rem" }}
          variant="contained"
          className={cl.header__button}
          onClick={handleClick}
        >
          ИСКАТЬ
        </Button>
      </div>
    </header>
  );
};

export default Header;
