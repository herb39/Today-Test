const loadedScripts = new Set<string>()

/** 동일한 src의 스크립트를 중복 삽입하지 않고 한 번만 로드한다. */
export function loadExternalScript(src: string): Promise<void> {
  if (loadedScripts.has(src)) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      loadedScripts.add(src)
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => {
      loadedScripts.add(src)
      resolve()
    }
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    document.head.appendChild(script)
  })
}
