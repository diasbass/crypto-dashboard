import { Suspense } from 'react'
import NotFoundContent from '../../components/NotFoundClient'

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}
