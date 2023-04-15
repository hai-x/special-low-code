import { defineStore } from "pinia";
import { ELEMENT_TYPE, Schema } from "@special/schema";
import { layoutElementList } from "@special/schema";
import { cloneDeep } from "lodash-es";
import { isLayoutComp, isBasicComp } from "@special/shared";
import { findDfs, deleteDfs, useGenerator } from "@special/shared";
interface IState {
  schema: Schema[];
  currentComponent: Schema | undefined;
  initCurrentComponentProps: any;
  initCurrentComponentEvents: any;
}

export const useSchema = defineStore("schema", {
  state: () =>
    ({
      schema: [],
      currentComponent: undefined,
      initCurrentComponentProps: undefined,
      initCurrentComponentEvents: undefined,
    } as IState),
  actions: {
    // 设置Schema
    setSchema(v: Schema[]) {
      this.schema = v;
    },
    // schema增加组件（宏）
    pushComponentToSchema(v: Schema) {
      const node = cloneDeep(v);
      this.schema.push(node);
      // window.runtime.add(node)
    },
    // schema增加组件（微）
    pushComponentToItem(v: Schema, id: string, columnIndex: number) {
      this.schema
        .find((i) => i.id === id)
        ?.children?.[columnIndex].children!.push(cloneDeep(v));
    },
    // 设置当前选中的组件
    setCurrentComponent(id: string) {
      this.currentComponent = findDfs(this.schema, id);
      this.initCurrentComponentProps = cloneDeep(this.currentComponent?.props);
      this.initCurrentComponentEvents = cloneDeep(this.currentComponent?.event);
    },
    // 清楚当前组件选中态
    clearCurrentComponent() {
      this.currentComponent = undefined;
    },
    // 删除选中组件
    deleteCurrentComponent() {
      window.runtime.remove(this.currentComponent?.id!);
      deleteDfs(this.schema, this.currentComponent?.id!);
      this.clearCurrentComponent();
    },
    // 更新组件的属性
    updateComponentProps(key: string, value: any) {
      if (isBasicComp(this.currentComponent!.type)) {
        this.currentComponent!.props[key] = value;
        // window.runtime.update({ id: this.currentComponent!.id, type: 'props', key, value })
      } else if (isLayoutComp(this.currentComponent!.type)) {
        switch (key) {
          case "columnNum":
            let componentType = this.currentComponent!.type;
            let curColumnLen = this.currentComponent!.children
              ?.length as number;
            if (value > curColumnLen) {
              const col = cloneDeep(
                layoutElementList[componentType].children![0]
              );
              for (let i = 1; i <= value - curColumnLen; i++) {
                this.currentComponent?.children!.push(useGenerator(col));
              }
              this.currentComponent?.children?.forEach((i) => {
                i.props.span = Math.floor(24 / +value);
              });
            }
            this.currentComponent!.props[key] = value;
            break;
          default:
            this.currentComponent!.props[key] = value;
            break;
        }
      }
    },
    // 更新组件的css样式
    updateComponentCssStyle(updatedStyleSheet: Record<string, any>) {
      Object.keys(updatedStyleSheet).forEach((key: string) => {
        this.currentComponent!.cssStyle[key] = updatedStyleSheet[key];
        // window.runtime.update({
        //   id: this.currentComponent!.id,
        //   type: "cssStyle",
        //   key,
        //   value: updatedStyleSheet[key],
        // });
      });
    },
    // 更新组件的事件
    updateComponentEvent(key: "eventType" | "code", value: any) {
      this.currentComponent!.event![key] = value;
    },
    // 重置初始属性
    resetComponentProps() {
      this.currentComponent!.props = this.initCurrentComponentProps;
    },
    // 重置初始事件
    resetComponentEvents() {
      this.currentComponent!.event = this.initCurrentComponentEvents;
    },
    // 初始化Schema
    resetSchema() {
      this.schema = [];
      //   window.runtime.clearAll();
    },
    // 导入Schema
    importSchema(json: string) {
      this.schema = JSON.parse(json);
    },
  },
});
