import { ReplicatedStorage, Workspace } from "@rbxts/services";

class Build {
	owner?: Player;
	model?: Model;

	level: number;
	position: Vector2;

	max_health = 1;

	constructor(position: Vector2) {
		this.level = 1;
		this.position = position;
		this.owner = undefined;
		this.setModel();
	}

	public setLevel(level: number) {
		this.destroyModel();
		this.level = level;
		this.setModel();
	}

	public upgrade() {
		this.setLevel(this.level + 1);
	}

	protected getFolder() {
		return ReplicatedStorage.Builds.FindFirstChild(tostring(this)) as Folder;
	}

	protected setModel() {
		const BuildModel = this.getFolder().FindFirstChild(`Level{level}`) as Model;

		this.model = BuildModel.Clone();
		this.model.PivotTo(new CFrame(this.position.X, 0, this.position.Y));
		this.model.Parent = Workspace.FindFirstChild("BuildModels");
	}

	protected destroyModel() {
		this.model?.Destroy();
	}

	protected destroy() {
		this.destroyModel();
	}
}

class Turret extends Build {
	shoot_delay = 1; // task.wait(this.shoot_delay)

	constructor(position: Vector2) {
		super(position);
	}

	public shoot() {}
}

class TroopGenerator extends Build {}

class Barracks extends TroopGenerator {
	max_health = 250;
}

class Walls extends Build {
	max_health = 300;
}

class BuilderHouse extends Build {
	max_health = 100;
}

class Canon extends Turret {
	shoot_delay = 2;
}

// map pour les classes (str:class)
export const buildMap = {
	Walls: Walls,
	Barracks: Barracks,
	BuilderHouse: BuilderHouse,
};

// fonction qui retourne une class à partir de son string, oui l'annotation de type est barbare
export function Create<T extends keyof typeof buildMap>(buildType: T): (typeof buildMap)[T] {
	return buildMap[buildType];
}

// obtenir la classe et créer son objet
const my_class = Create("Walls");
const my_object = new my_class(new Vector2());
