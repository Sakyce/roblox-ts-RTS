import { EVENTS } from "./networking";
import { Create, buildMap } from "shared/Buildings";

EVENTS.PlaceBuild.connect((Player, BuildName: keyof typeof buildMap, PlacePosition: Vector2) => {
	const newbuild = new (Create(BuildName))(PlacePosition);
});
