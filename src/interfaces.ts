import { ImageSourcePropType } from "react-native";
import Card from "./components/card";

export interface cardState {
	defaultImage: ImageSourcePropType,
	match?: boolean,
	press: boolean,
	held?: any,
	previous?: cardState,
}

export interface cardProps {
	letterDisplay: any
}


export interface GlobalObj {
	held: string,
	click?: number,
	previous?: Card
}