import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/appStore";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
