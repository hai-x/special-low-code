import { EventEmitter } from "@special/shared";

export default class StageRender extends EventEmitter {
    iframe: any;
    contentWindow: any;
    runtime: any
    runtimeUrl: string;
    constructor() {
        super()

        this.iframe = document.createElement('iframe')
        this.runtimeUrl = "http://127.0.0.1:5173/index.html"
        this.iframe.src = this.runtimeUrl
        this.iframe.style.cssText = `
            border: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            user-select: none;
        `;
        this.iframe.addEventListener('load', () => this.loadHandler());

    }
    private getRuntimeApi() {
        return {
            emitRuntimeReady: (runtime: any) => {
                this.runtime = runtime;
                window.runtime = runtime;
                this.emit('runtime-ready')
            },
        }
    }
    public async mount(el: HTMLIFrameElement) {
        if (!this.iframe) {
            throw Error('mount 失败');
        }
        // 不同域，使用srcdoc发起异步请求，需要目标地址支持跨域
        let html = await fetch(this.runtimeUrl).then((res) => res.text());
        // 使用base, 解决相对路径或绝对路径的问题
        const base = `${this.runtimeUrl}`;
        html = html.replace('<head>', `<head>\n<base href="${base}">`);
        this.iframe.srcdoc = html;
        el.appendChild<HTMLIFrameElement>(this.iframe);
        console.log(document.querySelector);
        
        this.postRuntimeReady()

    }
    private postRuntimeReady() {
        this.contentWindow = this.iframe?.contentWindow;
        this.contentWindow.runtimeApi = this.getRuntimeApi();
    }
    private loadHandler() {
        this.emit('runtime-load', this.iframe)
    }
}