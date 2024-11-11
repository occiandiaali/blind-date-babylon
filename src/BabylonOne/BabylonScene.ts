import {Engine, FreeCamera, HemisphericLight, KeyboardEventTypes, MeshBuilder, PhysicsImpostor, Scene, UniversalCamera, Vector3} from '@babylonjs/core'

export class BabylonScene {
    scene: Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();
        this.engine.runRenderLoop(() => {
            this.scene.render();
        })
    }

    CreateScene(): Scene {
        const scene = new Scene(this.engine);
        // const Camera = new FreeCamera("camera", new Vector3(0, 1, -5), this.scene);
        // Camera.attachControl();
        const cam = new UniversalCamera("cam", new Vector3(0,5,-10), this.scene);
        cam.inputs.addMouseWheel();
        cam.setTarget(Vector3.Zero());
        cam.attachControl(this.canvas,true);
        const light = new HemisphericLight("light", new Vector3(0,1,0), this.scene);
        light.intensity = 0.7;

        // const player1 = MeshBuilder.CreateCapsule("player1", {}, this.scene);
        // player1.position = new Vector3(0,1,0);
        const other1 = MeshBuilder.CreateCapsule('other1', {radiusBottom: 0.32}, this.scene);
        other1.position.y = 1;
        other1.position.x = 0;
        const other2 = MeshBuilder.CreateCapsule('other2', {}, this.scene);
        other2.position.y = 1;
        other2.position.x = -3;
     
        const ground = MeshBuilder.CreateGround("ground", {width: 15, height: 4}, this.scene);
        return scene;
    }
}
