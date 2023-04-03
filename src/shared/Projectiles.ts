class StraightProjectile {
	part: BasePart;
	step: number;
	target: Vector3;
	start: Vector3;

	constructor(start: Vector3, target: Vector3) {
		this.step = 0;
		this.start = start;
		this.target = target;

		this.part = new Instance("Part");
	}

	public run() {
		this.step += 0.1;
		this.part.Position = this.start.Lerp(this.target, this.step);

		return this.destroyCondition();
	}

	public destroy() {
		this.part.Destroy();
	}

	protected destroyCondition() {
		return this.step >= 1;
	}
}

class main {
	public static main(args: string): void {}
}
