import { $, isLayoutComp } from "@special/shared";
import { omit, merge } from 'lodash-es'

export default function useDrop(store: any) {

    const findDroppableArea = (clientX: number, clientY: number) => {
        let droppableAreaId
        let columnIndex
        let areaList = store.schema.filter((item: any) => item.type === 'row')
        for (let i = 0; i < areaList.length; i++) {
            let columnlen = areaList[i].children.length
            let columnWidth = Math.floor(375 / columnlen)

            const { left, right, bottom, top } = $(`#${areaList[i].id}`)!.getBoundingClientRect();

            for (let j = 1; j <= columnlen; j++) {
                const droppable = (clientX < right - (columnlen - j) * columnWidth) && (clientX > (left + (j - 1) * columnWidth)) && (clientY > top) && (clientY < bottom)

                if (droppable) {
                    droppableAreaId = areaList[i].id;
                    columnIndex = j - 1
                    break
                }
            }

        }
        return {
            id: droppableAreaId,
            index: columnIndex
        }
    };


    const dragoverHandler = (e: DragEvent) => {
        e.preventDefault();
    };

    const dragenterHandler = (e: DragEvent) => {
        e.preventDefault();
    };

    const dropHandler = (e: DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer?.getData("ELEMENT_INFO")) {
            let ELEMENT_INFO = JSON.parse(e.dataTransfer?.getData("ELEMENT_INFO"));
            
            const { clientX, clientY } = e;

            const { x, y } = $(".stage__wrap")!.getBoundingClientRect();

            const left = `${Math.floor(clientX - x)}px`;
            const top = `${Math.floor(clientY - y)}px`;

            let droppableAreaInfo = findDroppableArea(clientX, clientY)
            if (droppableAreaInfo?.id) {
                const schema = omit(ELEMENT_INFO, 'props.style.position')
                store.pushComponentToItem(schema, droppableAreaInfo.id, droppableAreaInfo.index)
            } else {
                store.pushComponentToSchema(
                    merge(ELEMENT_INFO, {
                    cssStyle: merge(ELEMENT_INFO.cssStyle, {
                        top,
                        left: isLayoutComp(ELEMENT_INFO.type) ? '0px' : left,
                    })
                }));

            }

        }
    };

    return {
        dragoverHandler,
        dragenterHandler,
        dropHandler,
    }
}