function createSandBox() {
    let iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    let sandBoxGlobal = iframe.contentWindow;
    iframe.style.display = 'none'
    let state: any = {}
    let sandBoxProxy = new Proxy(sandBoxGlobal!, {
        has() {
            return true
        },
        get(target, k: any) {
            return target[k];
        },
        set(_, k: any, v: any) {
            sandBoxGlobal![k] = v;
            state![k] = v
            return true
        },
    });
    let run = (code: string) => {
        let wrapCode = `with(proxy){${code}}`;
        (new Function("proxy", wrapCode))(sandBoxProxy);
    }

    return {
        state,
        run
    }
}

export default createSandBox

