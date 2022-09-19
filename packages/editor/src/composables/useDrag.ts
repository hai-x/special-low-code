import { $ } from "@special/shared";
import { Ref } from "vue";
import { debounce } from 'lodash-es'

export default function useDrag(store: any, activeFrame: Ref<Record<string, any>>) {
    const strategy: Record<string, Function> = {
        exceedRight: (top: string) => {
            store.updateComponentProps('css', 'left', undefined);
            store.updateComponentProps('css', 'right', '0px');
            store.updateComponentProps('css', 'top', top);
        },
        exceedBottom: (left: string) => {
            store.updateComponentProps('css', 'top', undefined);
            store.updateComponentProps('css', 'bottom', '0px');
            store.updateComponentProps('css', 'left', left);
        },
        exceedBoth: () => {
            store.updateComponentProps('css', 'left', undefined);
            store.updateComponentProps('css', 'top', undefined);
            store.updateComponentProps('css', 'bottom', '0px');
            store.updateComponentProps('css', 'right', '0px');
        },
        normal: (left: string, top: string, componentType: 'layout' | 'basic' = 'basic') => {
            switch (componentType) {
                case 'layout':
                    store.updateComponentProps('css', 'top', top);
                    break;
                case 'basic':
                    store.updateComponentProps('css', 'left', left);
                    store.updateComponentProps('css', 'top', top);
                    break;
                default:
                    break;
            }

        }
    }


    const dragendHandler = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        const curComponentWidth = parseInt(activeFrame.value.style.width)
        const curComponentHeight = parseInt(activeFrame.value.style.height)
        const componentType = activeFrame.value.id.startsWith('row') ? 'layout' : 'basic'

        const { x, y, width, height } = $(".stage__wrap")!.getBoundingClientRect();

        let left, top, right, bottom;

        // 边界条件 
        // 1.如果拖拽至区域右侧 直接吸附到右侧
        if (clientX > (x + (width - curComponentWidth))) {
            right = '0px';
        }
        // 2.如果拖拽至区域下侧 直接吸附到右侧
        if (clientY > (y + (height - curComponentHeight))) {
            bottom = '0px';
        }

        left = `${Math.round(clientX - x < 0 ? 0 : (clientX - x))}px`
        top = `${Math.round(clientY - y < 0 ? 0 : (clientY - y))}px`

        // 拖拽至区域右侧 处理left
        if (right) {
            strategy['exceedRight'](top)
        }
        // 拖拽至区域下侧 处理bottom
        if (bottom) {
            strategy['exceedRight'](left)
        }
        // 如果都超出区域 则处理left和top
        if (right && bottom) {
            strategy['exceedBoth']()

        }
        if (right || bottom) return

        // 没有超出的情况 则只设置left和top
        strategy['normal'](left, top, componentType)


    }
    return {
        dragendHandler
    }
}