import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 프레임워크(react/react-dom/react-router)와 테스트 콘텐츠 데이터를 각각
          // 별도 청크로 분리한다. 둘 다 거의 모든 라우트가 필요로 해 크기 자체는
          // 줄지 않지만, 이름이 명확해지고 캐시 무효화 단위가 분리된다 —
          // 테스트 콘텐츠만 바뀌어도 프레임워크 청크는 다시 받을 필요가 없다.
          if (id.includes('node_modules')) return 'vendor'
          if (id.includes('/src/data/tests/')) return 'test-data'
        },
      },
    },
  },
})
