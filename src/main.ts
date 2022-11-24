import html2canvas from "html2canvas";
import Canvas2Image from "./Canvas2Image";

/**
 * 通过dom字符串生成打印机专门的图片
 * @param dom 字符串
 */
export const generate = async (dom: string) => {
    const div = document.createElement('div');
    //节点不显示到可视范围
    Object.assign(div.style, {
        position: 'fixed',
        top: '-99999px',
        right: '-99999px',
    } as CSSStyleDeclaration)
    try {
        div.innerHTML = dom
        document.body.appendChild(div);
        const html2canvasResp = await html2canvas(div);
        //获取canvas
        const canvas = html2canvasResp.getContext('2d')?.canvas as HTMLCanvasElement;
        //把html2canvas生成的canvas交给Canvas2Image处理生成bmp图片
        return Canvas2Image.getImageBase64(canvas, canvas.width, canvas.height)
    } catch (e) {
        throw e;
    } finally {
        //完成销毁节点
        div.remove()
    }
}
