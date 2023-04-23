import { type ReactElement } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

const ReloadPrompt = (): ReactElement => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      // eslint-disable-next-line no-console
      console.log(`Service Worker at: ${swUrl}`)
      // @ts-expect-error just ignore
      if (reloadSW === 'true') {
        r &&
          setInterval(() => {
            // eslint-disable-next-line no-console
            console.log('Checking for sw update')
            r.update()
          }, 20000 /* 20s for testing purposes */)
      } else {
        // eslint-disable-next-line prefer-template,no-console
        console.log(`SW Registered: ${r}`)
      }
    },
    onRegisterError(error) {
      // eslint-disable-next-line no-console
      console.log('SW registration error', error)
    },
  })

  return (
    <div className="fixed bottom-0 z-50 w-full inset-x-0 mx-auto pb-[calc(env(safe-area-inset-bottom)+16px)]">
      {needRefresh && (
        <div className="bg-slate-800 text-slate-100 p-2 rounded mx-auto shadow-xl backdrop-blur-sm bg-opacity-90 max-w-sm">
          <div className="flex items-center justify-between text-xs">
            <div>نسخه جدید منتشر شده!</div>
            {needRefresh && (
              <button
                className="bg-slate-600 rounded-sm py-2 px-3 inline-block"
                onClick={() => updateServiceWorker(true)}
              >
                بارگذاری مجدد
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ReloadPrompt
