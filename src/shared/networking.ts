import { Networking } from "@flamework/networking";

// Client -> Server events
interface ServerEvents {
	PlaceBuild(BuildName: string, PlaceVec: Vector2): void;
}

// Server -> Client events
interface ClientEvents {
	event(param1: string): void;
}

// Returns an object containing a `server` and `client` field.
export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
