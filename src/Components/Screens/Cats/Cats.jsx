import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatActionWithThunk } from "../../Store/Cat/actions";
import { catSelector } from "../../Store/Cat/selectors";

export const Cats = () => {
  const { loading, error, catUrl } = useSelector(catSelector);
  const dispatch = useDispatch();

  const handleGetCats = () => {
    dispatch(getCatActionWithThunk());
  };
  useEffect(() => {
    handleGetCats();
  }, []);

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <div>
        <div>error</div>
        <button onClick={handleGetCats}>Refresh page</button>
      </div>
    );
  }

  return (
    <div>
      <img src={catUrl} alt="" />
    </div>
  );
};
