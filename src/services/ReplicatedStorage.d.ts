interface ReplicatedStorage extends Instance {
	Builds: Folder & {
		BuilderHouse: Folder & {
			Level1: Model & {
				Union: UnionOperation;
				Snap: Part;
			};
		};
		ArmyCamp: Folder & {
			Level1: Model & {
				Snap: Part;
				Model: Model & {
					FirePit: Model & {
						FirePart: Part & {
							PointLight: PointLight;
							Smoke: Smoke;
							Mesh: CylinderMesh;
							Fire: Fire;
						};
					};
				};
			};
		};
		Walls: Folder & {
			Level1: Model & {
				Part: Part;
				Snap: Part;
			};
		};
		Barracks: Folder & {
			Level1: Model & {
				Snap: Part;
			};
		};
		CommandCenter: Folder & {
			Level1: Model & {
				Union: UnionOperation;
				Snap: Part;
			};
		};
	};
	TS: Folder & {
		module: ModuleScript;
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				["compiler-types"]: Folder & {
					types: Folder;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
			};
		};
	};
}
