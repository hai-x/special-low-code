import { $, isBasicComp, isLayoutComp } from "@special/shared";
import { Ref } from "vue";

export default function useDrag(store: any, activeFrame: Ref<Record<string, any>>) {
    const strategy: Record<string, Function> = {
        exceedRight: (top: string) => {
            store.updateComponentCssStyle({
                left: undefined,
                right: '0px',
                top
            })
        },
        exceedBottom: (left: string) => {
            store.updateComponentCssStyle({
                top: undefined,
                bottom: '0px',
                left
            })
        },
        exceedBoth: () => {
            store.updateComponentCssStyle({
                left: undefined,
                top: undefined,
                bottom: '0px',
                right: '0px',
            })
        },
        normal: (left: string, top: string) => {
            const compType = store.currentComponent.type
            
            if (isLayoutComp(compType)) {
                store.updateComponentCssStyle({ top });
            } else if (isBasicComp(compType)) {
                store.updateComponentCssStyle({ top, left });
            }
        }
    }


    const dragendHandler = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        const curComponentWidth = parseInt(activeFrame.value.style.width)
        const curComponentHeight = parseInt(activeFrame.value.style.height)

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
        strategy['normal'](left, top)


    }
    return {
        dragendHandler
    }
}