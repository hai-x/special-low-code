import { $ } from "@special/shared";
import { Ref } from "vue";

export default function useDrag(store: any, activeFrame: Ref<Record<string, any>>) {
    const dragendHandler = (e: MouseEvent) => {

        const { clientX, clientY } = e;

        const curComponentWidth = parseInt(activeFrame.value.style.width)
        const curComponentHeight = parseInt(activeFrame.value.style.height)

        const { x, y, width, height } = $(".stage__wrap")!.getBoundingClientRect();

        let left, top, right, bottom;

        // 边界条件
        if (clientX > (x + (width - curComponentWidth))) {
            right = '0px';
        }
        if (clientY > (y + (height - curComponentHeight))) {
            bottom = '0px';
        }

        left = `${Math.round(clientX - x < 0 ? 0 : (clientX - x))}px`
        top = `${Math.round(clientY - y < 0 ? 0 : (clientY - y))}px`

        if (right) {
            store.updateComponentProps('css', 'left', 'unset');
            store.updateComponentProps('css', 'right', right);
            store.updateComponentProps('css', 'top', top);
        }
        if (bottom) {
            store.updateComponentProps('css', 'top', 'unset');
            store.updateComponentProps('css', 'bottom', bottom);
            store.updateComponentProps('css', 'left', left);
        }
        if (right && bottom) {
            store.updateComponentProps('css', 'left', 'unset');
            store.updateComponentProps('css', 'top', 'unset');
            store.updateComponentProps('css', 'bottom', bottom);
            store.updateComponentProps('css', 'right', right);

        }
        if (right || bottom) return

        store.updateComponentProps('css', 'left', left);
        store.updateComponentProps('css', 'top', top);


    }
    return {
        dragendHandler
    }
}