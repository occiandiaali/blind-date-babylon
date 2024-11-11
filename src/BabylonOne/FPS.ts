import {
    Engine,
    FreeCamera,
    HemisphericLight,
    MeshBuilder,
    Scene,
    SceneLoader,
    UniversalCamera,
    Vector3
} from '@babylonjs/core';

export class FPS {
    scene: Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();

        this.CreateController();

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    CreateScene(): Scene {
        const scene = new Scene(this.engine);
        new HemisphericLight("light", new Vector3(0,1,0), this.scene);

        scene.onPointerDown = (evt) => {
            if (evt.button === 0) this.engine.enterPointerlock();
            if (evt.button === 1) this.engine.exitPointerlock();
        };

        const framesPerSecond = 60;
        const gravity = -9.81;
        scene.gravity = new Vector3(0, gravity / framesPerSecond, 0);
        scene.collisionsEnabled = true;

        const other1 = MeshBuilder.CreateCapsule('other1', {height: 1.6, radiusBottom: 0.32}, this.scene);
        // other1.position.y = 1;
        // other1.position.x = 1;
        // other1.position.z = 2;
        other1.position = new Vector3(0,1,0);

        MeshBuilder.CreateGround("ground", {width: 20, height: 15}, this.scene);

        return scene;
    }

    CreateController(): void {
        const camera = new UniversalCamera("unicamera", new Vector3(0,2.5,-20),this.scene);
        camera.attachControl();

        //camera.applyGravity = true;
        camera.checkCollisions = true;

      //  camera.ellipsoid = new Vector3(1,1,1);

        camera.minZ = 0.45;
        camera.speed = 0.45;
        camera.angularSensibility = 4000;

        camera.keysUp.push(87);
        camera.keysLeft.push(65);
        camera.keysDown.push(83);
        camera.keysRight.push(68);
    }
}
