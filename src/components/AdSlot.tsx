import { useEffect, useRef } from 'react'
import { siteConfig } from '../config/site'
import { loadExternalScript } from '../utils/loadExternalScript'

interface AdSlotProps {
  /** AdSense 광고 단위 슬롯 ID. 없으면 표시하지 않는다. */
  slotId?: string
  className?: string
}

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

/**
 * 광고가 비활성화되어 있거나 슬롯 ID가 없으면 아무 것도 렌더링하지 않아
 * 빈 공간이 남지 않는다. 광고 스크립트 로딩 실패도 앱에 영향을 주지 않는다.
 */
export function AdSlot({ slotId, className }: AdSlotProps) {
  const insRef = useRef<HTMLModElement>(null)
  const enabled = siteConfig.adsenseEnabled && !!slotId

  useEffect(() => {
    if (!enabled) return
    let cancelled = false

    loadExternalScript(
      `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClient}`,
    )
      .then(() => {
        if (cancelled) return
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      })
      .catch(() => {
        // 광고 로딩 실패 시 조용히 무시한다.
      })

    return () => {
      cancelled = true
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className={className} data-testid="ad-slot">
      <ins
        ref={insRef}
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client={siteConfig.adsenseClient}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
