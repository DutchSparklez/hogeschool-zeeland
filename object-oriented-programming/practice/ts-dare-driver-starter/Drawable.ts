import CanvasUtil from './CanvasUtil.js';

/**
 * Represents a drawable object.
 */
export default abstract class Drawable {
    /**
     * The image to draw.
     */
    protected image: HTMLImageElement;

    /**
     * The x position of the drawable.
     */
    protected posX: number;

    /**
     * The y position of the drawable.
     */
    protected posY: number;

    /**
     * Returns the x position of the drawable.
     *
     * @returns The x position of the drawable.
     */
    public getPosX(): number {
        return this.posX;
    }

    /**
     * Returns the y position of the drawable.
     *
     * @returns The y position of the drawable.
     */
    public getPosY(): number {
        return this.posY;
    }

    /**
     * Returns the width of the image.
     *
     * @returns The width of the image.
     */
    public getWidth(): number {
        return this.image.width;
    }

    /**
     * Returns the height of the image.
     *
     * @returns The height of the image.
     */
    public getHeight(): number {
        return this.image.height;
    }

    /**
     * Draws the image on the canvas.
     *
     * @param canvas The canvas to draw on.
     */
    public render(canvas: HTMLCanvasElement): void {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
