import { $ } from "@special/shared";

export default function useDrop(store: any) {

    const dragoverHandler = (e: DragEvent) => {
        e.preventDefault();
    };

    const dragenterHandler = (e: DragEvent) => {
        e.preventDefault();
    };

    const dropHandler = (e: DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer?.getData("ELEMENT_INFO")) {
            const ELEMENT_INFO = JSON.parse(e.dataTransfer?.getData("ELEMENT_INFO"));

            const { clientX, clientY } = e;

            const { x, y } = $(".stage__wrap")!.getBoundingClientRect();

            const translateX = Math.floor(clientX - x);
            const translateY = Math.floor(clientY - y);

            store.pushComponentToSchema({
                ...ELEMENT_INFO,
                props: {
                    ...ELEMENT_INFO.props,
                    style: {
                        ...ELEMENT_INFO.props.style,
                        top: `${translateY}px`,
                        left: `${translateX}px`,
                    },
                },
            });
        }
    };

    return {
        dragoverHandler,
        dragenterHandler,
        dropHandler,
    }
}